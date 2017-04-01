const envConfig =  {
  prod: {
    GRAPHQL_ENDPOINT: "https://lu3rnl0dih.execute-api.us-west-2.amazonaws.com/main/graphql",
    BASE_URL: "https://spright.com",
    BOT_USERNAME: "gospright"
  },
  qa: {
    GRAPHQL_ENDPOINT: "https://578mwiuzv5.execute-api.us-west-2.amazonaws.com/main/graphql",
    BASE_URL: "https://qa.spright.com",
    BOT_USERNAME: "733893490093897"
  },
  dev: {
    GRAPHQL_ENDPOINT: "https://bounce-graphql.ngrok.io/graphql",
    BASE_URL: "https://bounce-public.ngrok.io",
    BOT_USERNAME: "1364256126968422"
  }
};

const currentEnv = (process.browser ? window.ENV : process.env.ENV) || 'dev';

export default envConfig[currentEnv];
