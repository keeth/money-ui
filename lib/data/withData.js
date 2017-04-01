import 'isomorphic-fetch'
import React from 'react'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { initClient } from './initClient'
import { initStore } from './initStore'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default (Component) => (
  class extends React.Component {
    static async getInitialProps (ctx) {
      const headers = ctx.req ? ctx.req.headers : {};
      const client = initClient(headers);
      const store = initStore(client, client.initialState);
      const userAgent = ctx.req? ctx.req.headers['user-agent'] : navigator.userAgent;

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...await (Component.getInitialProps ? Component.getInitialProps(ctx) : {})
      };

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, { userAgent } )}>
              <Component {...props} />
            </MuiThemeProvider>
          </ApolloProvider>
        );
        await getDataFromTree(app);
      }

      const state = store.getState();

      return {
        userAgent,
        initialState: {
          ...state,
          apollo: {
            data: client.getInitialState().data
          }
        },
        headers,
        ...props
      }
    }

    constructor (props) {
      super(props);
      this.client = initClient(this.props.headers);
      this.store = initStore(this.client, this.props.initialState);
    }

    render () {
      const {userAgent} = this.props;
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, {userAgent} )}>
            <Component {...this.props} />
          </MuiThemeProvider>
        </ApolloProvider>
      )
    }
  }
)
