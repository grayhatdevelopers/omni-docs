import SidebarTitleComponent from "../components/SidebarTitleComponent";

export default {
    /* Top right links */
    "home": {
        "title": "Home",
        "type": "page",
        "href": "https://getomni.app"
      },
      "api": {
        "title": "API ↗",
        "type": "page",
        "href": "https://getomni.app/api",
        "newWindow": true
      },


    'index': {
        title: 'Introduction',
        "theme": {
            "layout": "full"
          }
    },
    'readme': {
        title: 'Open Source'
    },
    '-- For users': {
        type: 'separator',
        "title": <SidebarTitleComponent>For users</SidebarTitleComponent>
    },
    'guide': {
        title: 'Guides for integrations',
    },
    'creatives': {
        title: 'Creative suite',
    },
    '-- Commercial use': {
        type: 'separator',
        "title":  <SidebarTitleComponent>Commercial use</SidebarTitleComponent>
    },
    'use-cases': {
        title: 'Use cases',
    },
    'pricing': {
        title: 'Pricing',
    },
    '-- For developers': {
        type: 'separator',
        "title": <SidebarTitleComponent>For developers</SidebarTitleComponent>
    },
    'API': {
        title: 'API',
    },
    'examples': {
        title: 'Examples',
    },
    

    '--': {
        type: 'separator',
    },
    'blog': {
        title: 'Blogs',
    },


    
}