Ext.define('Ext.ux.listbox.ListBox' ,{
  extend          : 'Ext.view.View',
  requires        : [
      //'TT.view.content.constr.Selecter',
      //'Ext.toolbar.Toolbar',
      //'Ext.button.Button',
  ],

  selectCls       : Ext.baseCSSPrefix+'listbox-item-selected',
  alias           : 'widget.listbox',
  cls             : Ext.baseCSSPrefix+'listbox-body',
  columningStyle: 'columns: {0}px; -moz-columns: {0}px; -webkit-columns: {0}px;',
  columnWidth: 0,
  multiSelect: true,
  emptyText: 'No data',
  prefix: '',
  postfix: '',
  displayField: 'title',
  cntTag: 'ul',
  itemTag: 'li',
  deletable: false,
  
  autoScroll: true,
  delBtnCls: Ext.baseCSSPrefix+'listbox-item-del',

  initComponent: function() {
    var me = this, style = '';
    me.itemSelector = 'li.listbox-item';
    me.autoEl = { tag: me.cntTag, cls: Ext.baseCSSPrefix+'listbox' };

    if (me.columnWidth) {
      me.autoEl.style = Ext.String.format(me.columningStyle, me.columnWidth);
    }

    if (me.deletable) {
        me.postfix += '<div class="'+me.delBtnCls+'">x</div>';
    }

    me.tpl = [
        '<tpl for=".">',
          '<',me.itemTag,' class="listbox-item">',
            me.prefix,
            '{',me.displayField,'}',
            me.postfix,
          '</',me.itemTag,'>',
        '</tpl>',
      ];
    me.callParent(arguments);

    me.on('beforeitemclick', me._onBeforeItemClick);
  },

  _onBeforeItemClick: function(me, rec, item, i, e) {
    if (e && e.getTarget(0, 0, true).hasCls(me.delBtnCls)) {
        rec.store.remove(rec);
        return false;
    }
  }
});

