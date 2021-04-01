export default {
    insert: function (table, item) {
        item.id = new Date().getTime()
        var arr = this.select(table)
        if (arr == null) arr = []
        arr.push(item)
        localStorage.setItem(table, JSON.stringify(arr))
    },
    select: function (table) {
        var result = localStorage.getItem(table)
        if (result == null) result = '[]'
        return JSON.parse(result)
    },
    remove: function (table, id) {

        var arr = this.select(table)
        var foundIndex = this._searchIndexById(table, id)
        if (foundIndex == undefined) {
            return;
        }

        arr.splice(foundIndex, 1)
        localStorage.setItem(table, JSON.stringify(arr))
    },
    upDate: function (table, id, item) {
        var arr = this.select(table)
        var foundIndex = this._searchIndexById(table, id)
        if (foundIndex == undefined) {
            return;
        }

        for (var key in item) {
            if (item[key]) {
                var selectedItem = arr[foundIndex]
                selectedItem[key] = item[key]
            }
        }

        localStorage.setItem(table, JSON.stringify(arr))
    },
    getItemById: function(table ,id) {
        var arr = this.select(table);
      return arr.find(function (item){
            return item.id == id;
        })
    },
    _searchIndexById: function (table, id) {
        var arr = this.select(table)
        var foundIndex = undefined
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.id == id) {
                foundIndex = i;
                break;
            }
        }
        return foundIndex
    },
};



//////////////////////////////////////////////////////

function twoClickE(dd) {

    let dd5 = document.getElementsByClassName('card11')
   let dd6 =  this.getElementsByClassName('gg')
    // alert(dd6.length)
    dd6[0].style.display = "block"
    document.getE



}


function switchToP(event) {
    var input = event.target
    var p = document.createElement('p');
    p.innerHTML = input.value;
    p.ondblclick = twoClickE;
    input.replaceWith(p)


}

