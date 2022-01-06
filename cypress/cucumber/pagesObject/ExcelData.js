class ExcelData{
    /*loadData(){
        var XLSX = require('xlsx')

        var workBook = XLSX.read(data, {
            type: 'binary'
        })

        var Sheet = workBook.SheetNames[0]

        for(var i = 0; i < excelRows.length; i++){

        }
    }*/

    /*loadData(){
        var XLSX = require('xlsx')
        var JSON = require('json')
        this.parseExcel = function(file) {
            var reader = new FileReader()

            reader.onload = function(e) {
                var data = e.target.result;
                var workBook = XLSX.read(data, {
                    type: 'binary'
                });

                workBook.SheetNames.forEach(function(sheetName){
                    // Here is your object
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workBook.Sheets[sheetName]);
                    var json_object = JSON.stringify(XL_row_object);

                    console.log(json_object);
                })
            };

            reader.onerror = function(ex){
                console.log(ex);
            };

            reader.readAsBinaryString(file);
        }

    
        

    }*/

    loadData(){
        var ExcelToJSON = function() {

            this.parseExcel = function(file) {
            var reader = new FileReader();
        
            reader.onload = function(e) {
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                type: 'binary'
                });
        
                workbook.SheetNames.forEach(function(sheetName) {

                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                var json_object = JSON.stringify(XL_row_object);
                console.log(json_object);
        
                })
        
            };
        
            reader.onerror = function(ex) {
                console.log(ex);
            };
        
            reader.readAsBinaryString(file);
            };
        };
    }
    
}

export default ExcelData