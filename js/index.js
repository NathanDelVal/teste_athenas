$(function () {
    var url = "./php/service.php";
    var db = DevExpress.data.AspNet.createStore({
        key: "id",
        loadUrl: url,
        insertUrl: url,
        updateUrl: url,
        deleteUrl: url
    });
    $("#gridContainer").dxDataGrid({
        dataSource: db,
        keyExpr: "id",
        remoteOperations: true,
        columns: [{
            dataField: "FirstName",
            fixed: true
        }, {
            dataField: "LastName",
            fixed: true
        }, {
            dataField: "address",
            fixed: true
        }, {
            dataField: "gender",
            fixed: true
        }, {
            dataField: "dateOfBirth",
            dataType: "date",
            fixed: true
        }],
        // filterRow: { visible: true },
        searchPanel: { visible: true },
        paging: {
            pageSize: 5
        },
        sorting: {
            mode: 'multiple'
        },
        allowColumnReordering: true,
        allowColumnResizing: true,
        editing: {
            mode: "popup",
            allowAdding: true,
            allowUpdating: true,
            allowDeleting: true
        },
        toolbar: {
            items: [
                {
                    name: "addRowButton",
                    showText: "always",
                },
                "searchPanel"
            ]
        },
    });
});
