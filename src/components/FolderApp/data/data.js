const explorer ={
    name: 'root',
    isFolder: true,
    items: [
        {
            name:'public',
            isFolder: true,
            items: [
                {
                    name: 'images',
                    isFolder: true,
                    items: [
                        {
                            name: 'img1.png',
                            isFolder: false
                        },
                        {
                            name: 'img2.png',
                            isFolder: false
                        }
                    ]
                },
                {
                    name: 'metadata',
                    isFolder: true,
                    items: [
                        {
                            name: 'data1.png',
                            isFolder: false
                        },
                        {
                            name: 'data2.png',
                            isFolder: false
                        }
                    ]
                }
            ]
        },
        {
            name:'src',
            isFolder: true,
            items:[
                {
                    name: 'comp',
                    isFolder: true,
                    items :[
                        {
                            name:'App.js',
                            isFolder: false
                        },
                        {
                            name:'App.css',
                            isFolder: false
                        },
                        {
                            name:'index.js',
                            isFolder: false
                        }
                    ]
                }
            ]
        }
    ]

}
export default explorer;