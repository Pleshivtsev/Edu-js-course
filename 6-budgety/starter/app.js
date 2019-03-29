//******   Test section */
var testController = (function () {
    var x = 23;

    return {
        value: function (arg) {
            return x + arg;
        },
        print: function (arg) {
            console.log(x + arg);
        }
    }
})();

//******************************************************* */

var budgetController = (function () {


    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(){        
        if (data.totals.inc > 0){
            this.percentage = Math.round(this.value / data.totals.inc * 100);
        }else{
            this.percentage = -1;
        }      
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };

    var Income = function (id, description, value) {
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
        },
        bugdet : 0,
        percentage : -1
    };


    var calculateTotal = function(){    
        let totalInc = 0;
        let totalExp = 0;
        data.allItems.exp.forEach(exp => totalExp += exp.value);
        data.allItems.inc.forEach(inc => totalInc += inc.value);

        data.totals.exp = totalExp;
        data.totals.inc = totalInc;
    }


    // Мои доработки контроллера -- начало    
    var Record = function (description, value) {
        this.description = description;
        this.value = value;
    }

    Record.prototype.calcPerc = function () {
        this.perc = this.value / exp2 * 100;
        return this.perc;
    }

    var records = [];
    var inc2 = 0;
    var exp2 = 0;
    // --- конец

    return {
        addItem: function (type, des, val) {
            if (isNaN(val)) return;

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

        deleteItem : function(itemId){
            let type = itemId.split("-")[0];
            let id = +(itemId.split("-")[1]);
            let idArray = data.allItems[type].map(item => item.id);
            let idx = idArray.indexOf(id);
            
            data.allItems[type].splice(idx,1);            
        },


        // моя доработка
        addRecord: function (type, des, val) {
            var record, recordValue;
            type === "inc" ? recordValue = +(val) : recordValue = -(val);
            record = new Record(des, recordValue);
            records.push(record);
            return record;
        },

        lastRecord: () => {
            let idx = records.length - 1;
            return {
                index: idx,
                description: records[idx].description,
                value: records[idx].value
            }
        },

        getRecords: () => records,

        deleteRecord: idx => {
            records.splice(idx, 1);
        },

        calculateBudget: function(){
            calculateTotal();            
            data.bugdet = data.totals.inc - data.totals.exp;
            if(data.totals.inc > 0){
                data.percentage = Math.round( (data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            }
            
        },

        calculatePercentage: () => data.allItems.exp.forEach(exp => exp.calcPercentage()),
      
        getPercentage: () => data.allItems.exp.map(exp => exp.getPercentage()),

        getBudget: function (){
            return {
                budget: data.bugdet,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: () => {
            console.log(data);
            console.log(records);
        }
    }


})();

var UIController = (function () {

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

    var formatNumber = function(num, type){
        /**
         + или - перед числом
         2 десятичных знака 
         запятая вместо точки
         апостроф разделяющий разряды
         2310.39754 -> + 2'310,40
         */
        
         num = Math.abs(num).toFixed(2);
         let int = num.split(".")[0];
         let dec = num.split(".")[1];

         if (int.length > 3){
             int = int.substr(0, int.length-3) + "'" + int.substr(int.length-3,3);
         }

         let sign = type === 'exp' ? '-' : "+";
         return sign + " " + int + "," + dec;
    }

    var getInputValue = querySelector => document.querySelector(querySelector).value;

    //Моя доработка
    var generateHtmlRecord = (id, description, value) => {
        let htmlInc = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        let htmlExp = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

        let html = value > 0 ? htmlInc : htmlExp;
        let val = value > 0 ? value : -(value);

        return html.replace("%id%", id).replace("%description%", description).replace("%value%", val);
    }

    return {
        getinput: () => {
            return {
                type: getInputValue(".add__type"),
                description: getInputValue(".add__description"),
                value: parseFloat(getInputValue(".add__value"))
            }
        },

        displayPercentanges: function (percentages){
            let fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

            var forEach2 = function(list, callback){
                for (let i = 0; i < list.length; i++){
                    callback(list[i],i);
                    //console.log("value: " + list[i] + " idx: " + i);
                }
            }
            
            forEach2(fields,(label,idx) => {
                let percVal = percentages[idx] > 0 ? percentages[idx] + "%" : "---";
                label.textContent = percVal;
            });

            //fields.forEach(label => label.textContent = percentages[idx] + "%" );

        },

        getDOMStrings: function () {
            return DOMstrings;
        },

        addListItem: function (obj, type) {
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
            newHtml = newHtml.replace('%value%', formatNumber(obj.value,type));

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: loc => {
            el = document.getElementById(loc);
            el.parentNode.removeChild(el);                        
        },
        
        clearFields: function () {
            let descField = document.querySelector(DOMstrings.inputDescription);
            let valField = document.querySelector(DOMstrings.inputValue);
            descField.value = "";
            valField.value = "";
            descField.focus();
        },

        displayBudget(budget){

            let type = budget.budget > 0 ? 'inc' : 'exp';
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(budget.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(budget.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(budget.totalExp, 'exp');
            
            if (budget.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = budget.percentage + "%";
            }else{
                document.querySelector(DOMstrings.percentageLabel).textContent = "---";
            }
        },

        displayMonth(){
            let now = new Date();
            let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август','Сентябрь', 'Ноябрь','Декабрь']
            document.querySelector(DOMstrings.dateLabel).textContent = months[now.getMonth()] + " " + now.getFullYear();
        },

        changedType(){

            let fields = document.querySelectorAll(DOMstrings.inputType + "," +
            DOMstrings.inputDescription + "," + 
            DOMstrings.inputValue);

            fields.forEach(field => field.classList.toggle("red-focus"));
            document.querySelector(DOMstrings.inputBtn).classList.toggle("red");
            document.querySelector(".add").classList.toggle("coral");

        },

        //Моя доработка
        addRecordToUI(id, description, value) {
            let html = generateHtmlRecord(id, description, value);
            let element = value > 0 ? DOMstrings.incomeContainer : DOMstrings.expensesContainer;
            document.querySelector(element).insertAdjacentHTML('beforeend', html);
        },

        testChangeId() {
            var elements = document.querySelectorAll(".container .item");
            elements.forEach(el => {
                console.log(el.id);
                console.log(el.id);
                console.log(el.id);
                console.log(el.id);
                el.id = "changed"
            });
        }

    }

})();

var appController = (function (budgetCtrl, UICtrl) {

    // ---- Перехватчики событий----------------------------
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMStrings();

        // Клик по кнопке "добавить"    
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // Нажатие ENTER
        document.addEventListener('keydown', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
                event.preventDefault(); // Предотвращение клика когда кнопка в фокусе
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

    }


    var updateBudget = function () {

        // 1. Пересчитать бюджет
        budgetCtrl.calculateBudget();

        // 2. Вернуть бюджет
        var budget = budgetCtrl.getBudget();

        // 3. Обновить отображение бюджета
        UICtrl.displayBudget(budget);        

    }

    var updatePercentages = function (){
        
        // 1. Пересчитать проценты
        budgetCtrl.calculatePercentage();

        // 2. Считать проценты из контроллера бюждета
        var percentages = budgetCtrl.getPercentage();

        // 3. Обновить UI
        UICtrl.displayPercentanges(percentages);
        //console.log(percentages);
    }

    // ---- Обработчики событий----------------------------
    var ctrlAddItem = function () {
        var input, newItem, record;


        // 1. Получить данные из полей
        input = UICtrl.getinput();

        if (isNaN(input.value)){
            UICtrl.clearFields();
            return;
        }

        // 2. Добавить элемент в budgetController
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        record = budgetCtrl.addRecord(input.type, input.description, input.value); // моя доработка             

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 3. Добавить новую строку в UI
            UICtrl.addListItem(newItem, input.type);
            //   let lastRec = budgetCtrl.lastRecord();
            //   UICtrl.addRecordToUI(lastRec.index, lastRec.description, lastRec.value);

            //4. Очистить поля
            UICtrl.clearFields();

            //5. Пересчитать бюджет
            updateBudget();

            //6. Пересчитать проценты
            updatePercentages();
        }
    }

    var ctrlDeleteItem = function(event){
        
        // Удаление элемента из бюджета
        let itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if (itemID && itemID.includes("-")){
            budgetCtrl.deleteItem(itemID);

            // Удаление элемента из UI
            UICtrl.deleteListItem(itemID);

            updateBudget();                        
            updatePercentages();
        }

        

    }

    var clickFn = function () {
        console.log("Click!");
    }

    var enterFn = function () {
        console.log("Enter! new");
    }
    // -------------------------------------------------

    return {
        init: function () {
            console.log("Application Started!");
            setupEventListeners();
            UICtrl.displayMonth();
            UICtrl.displayBudget( {
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
        }
    }

})(budgetController, UIController);

appController.init();