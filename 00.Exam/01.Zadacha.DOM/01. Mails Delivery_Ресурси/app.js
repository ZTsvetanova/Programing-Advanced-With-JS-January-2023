function solve() {
    //////////////////////////
    //взимаме елементите на входните данни в обект
    const inputs = {
        recipient: document.getElementById("recipientName"),
        title: document.getElementById("title"),
        message: document.getElementById("message"),
    };

    /////////////////////////
    //взимаме елементите на двата буто в обект

    const buttons = {
        addBtn: document.getElementById("add"),
        resetBtn: document.getElementById("reset"),
    };

    ////////////////////////////
    //добавяме евент на ресет бутона и функция която да изпълнява при клик

    buttons.resetBtn.addEventListener("click", reset);

    function reset(event) {
        event.preventDefault();
        inputs.recipient.value = "";
        inputs.title.value = "";
        inputs.message.value = "";
    }
    ///////////////////////////////////
    //добавяме евент на адд бутона и функция която да изпълнява

    buttons.addBtn.addEventListener("click", add);

    function add(event) {
        event.preventDefault();

        //взимаме строиностите от полетата в нови променливи

        const recipient = inputs.recipient.value;
        const title = inputs.title.value;
        const message = inputs.message.value;

        //проверяваме дали във всички полета има стойност,а не са празни

        if (recipient === "" || title === "" || message === "") {
            return;
        }

        //създаваме новият прозорец с полета

        const ul = document.getElementById("list");

        const li = document.createElement("li");
        //поле тайтъл
        const h4Title = document.createElement("h4");
        h4Title.textContent = `Title: ${title}`;
        //поле реципиент
        const h4Recipient = document.createElement("h4");
        h4Recipient.textContent = `Recipient Name: ${recipient}`;
        //поле съобщение
        const span = document.createElement("span");
        span.textContent = message;
        //създаваме поле за двата бутона
        const div = document.createElement("div");
        div.id = "list-action";
        //създаваме бутона за изпращане
        const sendBtn = document.createElement("button");
        sendBtn.type = "submit";
        sendBtn.id = "send";
        sendBtn.textContent = "Send";
        //създаваме бутона за изтриване
        const deletedBtn = document.createElement("button");
        deletedBtn.type = "submit";
        deletedBtn.id = "delete";
        deletedBtn.textContent = "Delete";
        //създаваме връзките в ДОМ дървото
        ul.appendChild(li);
        li.appendChild(h4Title);
        li.appendChild(h4Recipient);
        li.appendChild(span);
        li.appendChild(div);
        div.appendChild(sendBtn);
        div.appendChild(deletedBtn);
        //нулираме стойностите на първия прозорец, защото вече са записани във втория
        inputs.recipient.value = "";
        inputs.title.value = "";
        inputs.message.value = "";
        //създаваме евент на изпращащия бутон от прозорец 2
        sendBtn.addEventListener("click", send);

        function send() {
            //изтриваме прозорец 2
            li.remove();
            //взимаме елемента на прозорец 3
            const ulSent = document.querySelector(".sent-list");
            //създаваме елемент ли
            const liSent = document.createElement("li");
            //стздаваме елемент със спан и му даваме текст
            const spanTo = document.createElement("span");
            spanTo.textContent = `To: ${recipient}`;
            //създаваме елемент със заглавие и му даваме текст
            const spanTitle = document.createElement("span");
            spanTitle.textContent = `Title: ${title}`;
            //създаваме място за бутона на изпратени съобщения
            const divSent = document.createElement("div");
            divSent.classList.add("btn");
            //създаваме бутона
            const deleteSentBtn = document.createElement("button");
            deleteSentBtn.type = "submit";
            deleteSentBtn.classList.add("delete");
            deleteSentBtn.textContent = "Delete";
            //създаваме връзките в ДОМ дървото за "изпратени"
            ulSent.appendChild(liSent);
            liSent.appendChild(spanTo);
            liSent.appendChild(spanTitle);
            liSent.appendChild(divSent);
            divSent.appendChild(deleteSentBtn);
            //създаваме евент на изтриващия бутон от изпратени
            deleteSentBtn.addEventListener("click", deleteSentBtnFunction);

            function deleteSentBtnFunction() {
                //изтрива
                liSent.remove();
                //взимаме елемента за изтрити съобщения
                const ulDeleteList = document.querySelector(".delete-list");
                //създаваме елемент ли
                const liDeleteList = document.createElement("li");
                //създаваме спан и му даваме текст
                const spanDeleteListTo = document.createElement("span");
                spanDeleteListTo.textContent = `To: ${recipient}`;
                //създаваме спан и му даваме текст
                const spanDeleteListTitle = document.createElement("span");
                spanDeleteListTitle.textContent = `Title: ${title}`;
                //създаваме връзките в ДОМ дървото
                ulDeleteList.appendChild(liDeleteList);
                liDeleteList.appendChild(spanDeleteListTo);
                liDeleteList.appendChild(spanDeleteListTitle);
            }
        }
        //създаваме евент на бутона за изтриване при изпратените
        deletedBtn.addEventListener("click", deletedBtnFunction);

        function deletedBtnFunction() {
            li.remove();

            const ulDeleteList = document.querySelector(".delete-list");

            const liDeleteList = document.createElement("li");

            const spanDeleteListTo = document.createElement("span");
            spanDeleteListTo.textContent = `To: ${recipient}`;

            const spanDeleteListTitle = document.createElement("span");
            spanDeleteListTitle.textContent = `Title: ${title}`;

            ulDeleteList.appendChild(liDeleteList);
            liDeleteList.appendChild(spanDeleteListTo);
            liDeleteList.appendChild(spanDeleteListTitle);
        }
    }
}
solve()