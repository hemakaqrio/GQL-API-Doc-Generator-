
function markdown(string) { 
  const target = string[0]
  const trimSize = /^\s+/.exec(string)[0].length
  return target
    .split('\n')
    .map((line) => line.substr(trimSize - 1))
    .join('\n')
}

function relativePath(target) {
  return path.join(path.dirname(fileURLToPath(import.meta.url)), target)
}

export default {
  introspection: {
    type: 'url',
    url: 'https://wifzv6yr5vgavb7djuft6eh3be.appsync-api.us-east-1.amazonaws.com/graphql',  //graphql endpoint url

    method: 'POST',

    headers: {
      "X-API-KEY": "da2-ex3jnu5oofcyva6gfypyz5nxm4"
    },
  },
  
  website: {
    template: 'carbon-multi-page',

    templateVersion: '4.1.2',

    output: './docs',

    staticAssets: './docs/assets',

    options: {

      appTitle: 'QRFlash GraphQL Documentation',

      appLogo: 'https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-graphql-an-open-source-data-query-and-manipulation-language-for-api-logo-tritone-tal-revivo.png',


      appFavicon: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_graphql_icon_130564.png',
      // siteRoot: '/docs',

      siteMeta: {
        description: 'This is your website description',
        keywords: 'svelte,docs,magidoc,cool',
      },


      fieldsSorting: 'default',
      
      /**
       * Defines the order that the arguments of a type appear in the page.
       * Choices are ['default', 'alphabetical']
       *
       * @default 'default' The order used in the schema.
       */
      argumentsSorting: 'default',

      /**
       * The directives that should appear in the documentation.
       * When using SDL introspection, the location and definition of these directives will be displayed where they are used.
       *
       * @default []
       */
      directives: [
        {
          name: "ValidDate",
          args: ["before", "after"],
        },
                {
          name: "ValidInt",
          args: ["*"], // To document all args of a directive.
        },
        {
          name: "*", // To document all directives and all args.
          args: ["*"],
        }
      ],

      /**
       * Customize pages and their content. Each of these pages will be presented before the graphQL documentation.
       * Use this to present your API urls, authentication flows, designs, concepts, or whatever you want.
       *
       * @default (A default Magidoc page)
       */
      pages: [
        {
          title: 'Welcome',
          content: markdown`
            # 👋 Hi

            Welcome to [QR Flash](https://qriomatrix.com)'s GraphQL documentation
            generated with [Magidoc](https://github.com/magidoc-org/magidoc), a free open source software designed to build customizable static GraphQL documentation websites with little effort.

            You can test your GraphQL API testing this [GraphQL API Playground](http://graphql-api-aws-bucket.s3-website-us-east-1.amazonaws.com/).

            ## Wanna learn more?

            Head to the docs to learn how to [generate your own static GraphQL documentation website](https://magidoc.js.org/introduction/welcome)!
          `,
        }
      ],

      /**
       * A list of external links to render inside the template that could point to other external resources.
       *
       * Use this for social links (youtube, linkedin, slack, discord, etc),
       * external repositories, articles, other documentation, etc.
       *
       * @see https://github.com/magidoc-org/magidoc/blob/main/docs/magidoc.mjs for an example.
       *
       */
      // externalLinks: [
      //   {
      //     /**
      //      * A mandatory href.
      //      */
      //     href: 'https://github.com',

      //     /**
      //      * A mandatory display name.
      //      */
      //     label: 'Main repository',

      //     /**
      //      * An optional position for the link in the page. Choices are ['header', 'navigation']
      //      *
      //      * @default navigation
      //      */
      //     position: 'navigation',

      //     /**
      //      * An optional group for the link, so that links with the same groups are put in the same section.
      //      */
      //     group: 'Repositories',

      //     /**
      //      * An optional link kind. (i.e github, linkedin, slack, discord, youtube, etc.).This is used to determine the icon to display.
      //      */
      //     kind: 'Github',
      //   },
      // ],

      /**
       * Optional query generation factory. See more details below
       *
       * @default {}
       */
      queryGenerationFactories: {
        'Int!': 123,
        id: "id123",
        vendorId: "ven123",
        customerId: "cus123",
        qRCodeId: "qr123",
        categoryId: "cat123",
        String: 'food',
        subProductId: "sPro123",
        productId: "pro123",
        orderId: "order123",
        phoneNo: "0777123456",
        email: "user@gmail.com",
        status: "true"



        
      },
    },
  },
}