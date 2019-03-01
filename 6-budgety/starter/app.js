//******   Test section */
var testController = (function(){
    var x = 23;

    return {        
        value: function (arg){
            return x+arg;
        },
        print: function(arg){
            console.log(x+arg);
        }
    }
})();

//******************************************************* */

var budgetController = (function() {   

   
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;        
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;        
    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };



    // Мои доработки контроллера -- начало    
    var Record = function(description, value){        
        this.description = description;
        this.value = value;        
    }

    Record.prototype.calcPerc = function(){
        this.perc = this.value / exp2 * 100;
        return this.perc;
    }

    var records = [];
    var inc2 = 0;
    var exp2 = 0;  
    // --- конец

    return{
        addItem: function(type, des, val){
            var newItem, ID;
            
            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            // ID = last ID + 1
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },
        // моя доработка
        addRecord: function(type, des, val){
            var record, recordValue;            
            type === "inc" ? recordValue = +(val) : recordValue = -(val);
            record = new Record(des, recordValue);
            records.push(record);
            return record;
        },

        lastRecord: () =>{
            let idx = records.length-1;
            return {
                index : idx,
                description: records[idx].description,
                value: records[idx].value
            }
        },

        getRecords: () => records,

        deleteRecord: idx =>{                
            records.splice(idx,1);
        },

        testing: () => {
            console.log(data);
            console.log(records);
        }
    }



})();

var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var getInputValue  = querySelector => document.querySelector(querySelector).value;
    
    //Моя доработка
    var generateHtmlRecord = (id, description, value) => {          
        let htmlInc = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        let htmlExp = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

        let html = value > 0 ? htmlInc : htmlExp;
        let val = value > 0 ? value : -(value);
        
        return html.replace("%id%", id).replace("%description%", description).replace("%value%", val);
    }

    return{
        getinput: () => {
            return{
                type        : getInputValue(".add__type"),
                description : getInputValue(".add__description"),
                value       : getInputValue(".add__value")
            }                                  
        },
        
        getDOMStrings: function (){
            return DOMstrings;
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        //Моя доработка
        addRecordToUI(id, description, value){
            let html = generateHtmlRecord(id, description, value);
            let element = value > 0 ? DOMstrings.incomeContainer : DOMstrings.expensesContainer;
            document.querySelector(element).insertAdjacentHTML('beforeend', html);
        },

        testChangeId(){
            var elements = document.querySelectorAll(".container .item");
            elements.forEach(el => {
                console.log(el.id);
                el.id = "changed"
            });            
        }

    }

})();

var appController = (function(budgetCtrl, UICtrl) {

     // ---- Перехватчики событий----------------------------
    var setupEventListeners = function(){        
        var DOM = UICtrl.getDOMStrings();
        
        // Клик по кнопке "добавить"    
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);       
        
        // Нажатие ENTER
        document.addEventListener('keydown', function(event) {
            
            if (event.keyCode === 13 || event.which === 13) {
                 ctrlAddItem();                     
                 event.preventDefault(); // Предотвращение клика когда кнопка в фокусе
            }            
        });

    }
        
    // ---- Обработчики событий----------------------------
    var ctrlAddItem = function(){
        var input, newItem, record;


              // 1. Получить данные из полей
              input = UICtrl.getinput(); 
                   
              // 2. Добавить элемент в budgetController
              newItem = budgetCtrl.addItem(input.type, input.description, input.value);
              record = budgetCtrl.addRecord(input.type, input.description, input.value); // моя доработка             

              // 3. Добавить новую строку в UI
              UICtrl.addListItem(newItem, input.type);
            //   let lastRec = budgetCtrl.lastRecord();
            //   UICtrl.addRecordToUI(lastRec.index, lastRec.description, lastRec.value);

              // 4. Пересчитать бюджет
              // 5. Обновить отображение бюджета
    }

    var clickFn = function(){
        console.log("Click!");
    }

    var enterFn = function(){
        console.log("Enter! new");
    }
    // -------------------------------------------------

    return {
        init: function(){
            console.log("Application Started!");
            setupEventListeners();
        }
    }    

})(budgetController, UIController);

appController.init();