Ext.define('Ext.ux.listbox.Panel', {
    extend: 'Ext.panel.Panel',
    requires: ['Ext.ux.listbox.ListBox'],

    alias: 'widget.listpanel',

    initComponent: function() {
        var me = this;

        // Look up the configured Store. If none configured, use the fieldless, empty Store defined in Ext.data.Store.
        me.store = Ext.data.StoreManager.lookup(me.store || 'ext-empty-store');

        me.view = Ext.create('Ext.ux.listbox.ListBox', Ext.apply({}, me.viewConfig, {
            store: me.store,
            displayField: me.displayField,
            features: me.features,
            panel: me
        }));

        me.items = [me.view];

        me.relayEvents(me.view, [
            /**
             * @event beforeitemmousedown
             * @alias Ext.view.View#beforeitemmousedown
             */
            'beforeitemmousedown',
            /**
             * @event beforeitemmouseup
             * @alias Ext.view.View#beforeitemmouseup
             */
            'beforeitemmouseup',
            /**
             * @event beforeitemmouseenter
             * @alias Ext.view.View#beforeitemmouseenter
             */
            'beforeitemmouseenter',
            /**
             * @event beforeitemmouseleave
             * @alias Ext.view.View#beforeitemmouseleave
             */
            'beforeitemmouseleave',
            /**
             * @event beforeitemclick
             * @alias Ext.view.View#beforeitemclick
             */
            'beforeitemclick',
            /**
             * @event beforeitemdblclick
             * @alias Ext.view.View#beforeitemdblclick
             */
            'beforeitemdblclick',
            /**
             * @event beforeitemcontextmenu
             * @alias Ext.view.View#beforeitemcontextmenu
             */
            'beforeitemcontextmenu',
            /**
             * @event itemmousedown
             * @alias Ext.view.View#itemmousedown
             */
            'itemmousedown',
            /**
             * @event itemmouseup
             * @alias Ext.view.View#itemmouseup
             */
            'itemmouseup',
            /**
             * @event itemmouseenter
             * @alias Ext.view.View#itemmouseenter
             */
            'itemmouseenter',
            /**
             * @event itemmouseleave
             * @alias Ext.view.View#itemmouseleave
             */
            'itemmouseleave',
            /**
             * @event itemclick
             * @alias Ext.view.View#itemclick
             */
            'itemclick',
            /**
             * @event itemdblclick
             * @alias Ext.view.View#itemdblclick
             */
            'itemdblclick',
            /**
             * @event itemcontextmenu
             * @alias Ext.view.View#itemcontextmenu
             */
            'itemcontextmenu',
            /**
             * @event beforecontainermousedown
             * @alias Ext.view.View#beforecontainermousedown
             */
            'beforecontainermousedown',
            /**
             * @event beforecontainermouseup
             * @alias Ext.view.View#beforecontainermouseup
             */
            'beforecontainermouseup',
            /**
             * @event beforecontainermouseover
             * @alias Ext.view.View#beforecontainermouseover
             */
            'beforecontainermouseover',
            /**
             * @event beforecontainermouseout
             * @alias Ext.view.View#beforecontainermouseout
             */
            'beforecontainermouseout',
            /**
             * @event beforecontainerclick
             * @alias Ext.view.View#beforecontainerclick
             */
            'beforecontainerclick',
            /**
             * @event beforecontainerdblclick
             * @alias Ext.view.View#beforecontainerdblclick
             */
            'beforecontainerdblclick',
            /**
             * @event beforecontainercontextmenu
             * @alias Ext.view.View#beforecontainercontextmenu
             */
            'beforecontainercontextmenu',
            /**
             * @event containermouseup
             * @alias Ext.view.View#containermouseup
             */
            'containermouseup',
            /**
             * @event containermouseover
             * @alias Ext.view.View#containermouseover
             */
            'containermouseover',
            /**
             * @event containermouseout
             * @alias Ext.view.View#containermouseout
             */
            'containermouseout',
            /**
             * @event containerclick
             * @alias Ext.view.View#containerclick
             */
            'containerclick',
            /**
             * @event containerdblclick
             * @alias Ext.view.View#containerdblclick
             */
            'containerdblclick',
            /**
             * @event containercontextmenu
             * @alias Ext.view.View#containercontextmenu
             */
            'containercontextmenu',
            /**
             * @event selectionchange
             * @alias Ext.selection.Model#selectionchange
             */
            'selectionchange',
            /**
             * @event beforeselect
             * @alias Ext.selection.RowModel#beforeselect
             */
            'beforeselect',
            /**
             * @event select
             * @alias Ext.selection.RowModel#select
             */
            'select',
            /**
             * @event beforedeselect
             * @alias Ext.selection.RowModel#beforedeselect
             */
            'beforedeselect',
            /**
             * @event deselect
             * @alias Ext.selection.RowModel#deselect
             */
            'deselect'
        ]);

        me.callParent(arguments);
    }
});
