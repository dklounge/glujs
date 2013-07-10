glu.defView('ps.notificationSummary', {
    xtype: 'container',
//    cls: 'notification',
    layout: {
        type: 'hbox'
    },
    listeners: [
        {
            event: 'tap',
            element: 'element',
            fn: '@{openScreen}'
        }
    ],
    items: [
        {
            xtype: 'label',
            html: '@{count}'

        },
        {
            xtype: 'label',
            html: '@{message}'
        }
    ]
});

