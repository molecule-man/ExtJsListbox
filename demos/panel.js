Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux.listbox', '..');

Ext.require([
    'Ext.ux.listbox.Panel'
]);

Ext.onReady(function(){

    var dummyData = {'items':[
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
        ]};
    Ext.create('Ext.data.Store', {
        storeId:'dummy-store',
        fields:['name', 'email', 'phone'],
        data: dummyData,
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    Ext.create('Ext.ux.listbox.Panel', {
        title: 'ListBox',
        store: 'dummy-store',
        displayField: 'email',
        viewConfig: {
            deletable: true
        },
        width: 200,
        height: 200,
        renderTo: Ext.getBody()
    });

});
