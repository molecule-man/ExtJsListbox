Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux.listbox', '..');

Ext.require([
    'Ext.ux.listbox.ListBox'
]);

Ext.onReady(function(){

    var dummyData = {'items':[
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
        ]};
    // Example 1
    Ext.create('Ext.data.Store', {
        storeId:'store1',
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

    Ext.create('Ext.ux.listbox.ListBox', {
        store: 'store1',
        displayField: 'email',
        width: 200,
        height: 200,
        renderTo: 'ex1'
    });

    // Example 2
    Ext.create('Ext.data.Store', {
        storeId:'store2',
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

    Ext.create('Ext.ux.listbox.ListBox', {
        store: 'store2',
        displayField: 'email',
        deletable: true,
        width: 200,
        height: 200,
        renderTo: 'ex2'
    });

    // Example 3
    Ext.create('Ext.data.Store', {
        storeId:'store3',
        fields:['name'],
        data: [
            ['3m Co'],
            ['Alcoa Inc'],
            ['Altria Group Inc'],
            ['American Express Company'],
            ['American International Group, Inc.'],
            ['AT&T Inc.'],
            ['Boeing Co.'],
            ['Caterpillar Inc.'],
            ['Citigroup, Inc.'],
            ['E.I. du Pont de Nemours and Company'],
            ['Exxon Mobil Corp'],
            ['General Electric Company'],
            ['General Motors Corporation'],
            ['Hewlett-Packard Co.'],
            ['Honeywell Intl Inc'],
            ['Intel Corporation'],
            ['International Business Machines'],
            ['Johnson & Johnson'],
            ['JP Morgan & Chase & Co'],
            ['McDonald\'s Corporation'],
            ['Merck & Co., Inc.'],
            ['Microsoft Corporation'],
            ['Pfizer Inc'],
            ['The Coca-Cola Company'],
            ['The Home Depot, Inc.'],
            ['The Procter & Gamble Company'],
            ['United Technologies Corporation'],
            ['Verizon Communications'],
            ['Wal-Mart Stores, Inc.'],
            ['Walt Disney Company (The) (Holding Company)']
        ],
        proxy: {
            type: 'memory',
            reader: {
                type: 'array'
            }
        }
    });

    Ext.create('Ext.ux.listbox.ListBox', {
        store: 'store3',
        displayField: 'name',
        width: 600,
        columnWidth: 180,
        height: 200,
        renderTo: 'ex3'
    });
});
