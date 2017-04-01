import Head from 'next/head';
import {AppBar, FlatButton} from 'material-ui';

export default ({title, children}) => (
  <div>
    <Head>
      <title>{title || 'Money'}</title>
    </Head>
    <AppBar title="Money" iconElementRight={<FlatButton label="Login" />} />
    {children}
  </div>
)
