Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux.listbox', '..');

Ext.require([
    'Ext.ux.listbox.ListBox'
]);

Ext.onReady(function(){

    Ext.create('Ext.data.Store', {
        storeId:'dummy-store1',
        fields:['id', 'name'],
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'advanced1.json',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    Ext.create('Ext.data.Store', {
        storeId:'dummy-store2',
        fields:['id', 'name'],
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'advanced2.json',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    var cnt = Ext.create('Ext.container.Container', {
        xtype: 'container',
        renderTo: Ext.getBody(),
        height: 400,
        width: 500,
        layout: {
            type: 'hbox',
            align: 'stretch'
          },
        defaults: {
            margins: '0 10 0 10'
          },
        items: [{
            xtype: 'listbox',
            itemId: 'list1',
            margins: 0,
            store: 'dummy-store1',
            displayField: 'name',
            flex: 1
          },{
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
              },
            items: [{
                xtype: 'button',
                margins: '0 0 5',
                disabled: true,
                itemId: 'button2to1',
                text: '<<'
              },{
                xtype: 'button',
                disabled: true,
                itemId: 'button1to2',
                text: '>>'
              }],
            width: 30
          },{
            xtype: 'listbox',
            itemId: 'list2',
            margins: 0,
            store: 'dummy-store2',
            displayField: 'name',
            flex: 1
          }]
    });

    cnt.mon(cnt.down('#list1'), 'selectionchange', function(v, els) {
      cnt.down('#button1to2').setDisabled(!els.length);
    });
    cnt.mon(cnt.down('#list2'), 'selectionchange', function(v, els) {
      cnt.down('#button2to1').setDisabled(!els.length);
    });

    cnt.mon(cnt.down('#button1to2'), 'click', function(v, els) {
      var list1 = cnt.down('#list1'), list2 = cnt.down('#list2');
      var recs = list1.selModel.getSelection();
      list1.store.remove(recs);
      list2.store.add(recs);
    });
    cnt.mon(cnt.down('#button2to1'), 'click', function(v, els) {
      var list1 = cnt.down('#list1'), list2 = cnt.down('#list2');
      var recs = list2.selModel.getSelection();
      list2.store.remove(recs);
      list1.store.add(recs);
    });
});
