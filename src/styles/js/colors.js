import theme from './theme';


//assignments this will be compiled to css
module.exports = function(api) {
    api.add({

      body: {
        background: theme.contentBackground,
        color: theme.contentText
      },

      p: {
        color: theme.contentText
      },

      h1: {
        color: theme.contentHeadlines
      },

      h2: {
        color: theme.contentHeadlines
      },

      header: {
        background: theme.primaryBack,
        color: theme.primaryText
      },

      nav: {
        background: theme.primaryBack,
          a: {
            color: theme.menuItemText,
            ':hover': {
              background: api.darken(theme.menuItemBackgroundHover, 10),
              color: api.lighten(theme.menuItemTextHover, 20),
            }
          }
         
        }
    });
}
