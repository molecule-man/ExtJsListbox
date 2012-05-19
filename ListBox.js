Ext.define('Ext.ux.listbox.ListBox' ,{
  extend          : 'Ext.view.View',
  requires        : [
      //'TT.view.content.constr.Selecter',
      //'Ext.toolbar.Toolbar',
      //'Ext.button.Button',
  ],

  selectCls       : Ext.baseCSSPrefix+'listbox-item-selected',
  alias           : 'widget.listbox',
  cls             : Ext.baseCSSPrefix+'listbox',
  columningStyle: 'columns: {0}px; -moz-columns: {0}px; -webkit-columns: {0}px;',
  columnWidth: 0,
  multiSelect: true,
  emptyText: 'No data',
  prefix: '',
  postfix: '',
  displayField: 'title',
  cntTag: 'div',
  listTag: 'ul',
  itemTag: 'li',
  deletable: false,
  
  autoScroll: true,
  delBtnCls: Ext.baseCSSPrefix+'listbox-item-del',

  initComponent: function() {
    var me = this, tag = '<'+me.listTag;
    me.itemSelector = me.itemTag+'.listbox-item';

    if (!me.panel) {
        me.cls += ' '+Ext.baseCSSPrefix+'listbox-bordered';
    }
    me.autoEl = { tag: me.cntTag, cls: me.cls };

    if (me.columnWidth) {
        tag += ' style="' + Ext.String.format(me.columningStyle, me.columnWidth) + '"';
    }

    tag += '>';

    if (me.deletable) {
        me.postfix += '<div class="'+me.delBtnCls+'">x</div>';
    }

    me.tpl = [
        tag,
        '<tpl for=".">',
          '<',me.itemTag,' class="listbox-item">',
            me.prefix,
            '{',me.displayField,'}',
            me.postfix,
          '</',me.itemTag,'>',
        '</tpl>',
        '</',me.listTag,'>'
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

