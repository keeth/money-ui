import Layout from '../components/layout';
import withData from "../lib/data/withData";
import RaisedButton from 'material-ui/RaisedButton';

export default withData(() => (
  <Layout title="Login">
    <div>Login</div>
    <RaisedButton label="Button" primary style={{ margin: 12 }} />
  </Layout>
))
