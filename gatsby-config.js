require("dotenv").config();

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",

    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "lollies",
        // This is the field under which it's accessible
        fieldName: "Lollies",
        // URL to query from
        url: process.env.GRAPHQL_URL,
      },
    },
  ],
};
