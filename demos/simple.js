Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux.listbox', '..');

Ext.require([
    'Ext.ux.listbox.ListBox'
]);

Ext.onReady(function(){

    Ext.create('Ext.data.Store', {
        storeId:'simpsonsStore',
        fields:['name', 'email', 'phone'],
        data:{'items':[
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    Ext.create('Ext.ux.listbox.ListBox', {
        store: 'simpsonsStore',
        displayField: 'email',
        width: 200,
        height: 200,
        renderTo: Ext.getBody()
    });

});
