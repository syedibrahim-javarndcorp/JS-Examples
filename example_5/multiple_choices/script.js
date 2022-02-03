     function findcost()
        {
            var major = document.getElementById("major");
            var Starters = document.getElementById("starters");
            var soft = document.getElementById("soft");
            var s = "Item \t \t \t Price \n--------------------------------\n";
            var totalcost = 0;
       
            for( var i = 0; i < major.options.length; i++)
            {
                var option = major.options[i];
                if(option.selected == true)
                {
                    var price = parseInt(option.value);
                    totalcost = totalcost + price;
                    s = s+ option.text + "\t \t" + price + "\n";
                }
            }
            for( var i = 0; i < starters.options.length; i++)
            {
                var option = starters.options[i];
                if(option.selected == true)
                {
                    var price = parseInt(option.value);
                    totalcost = totalcost + price;
                    s = s + option.text + "\t \t" + price + "\n";
                }
            }
            var softdrinkindex = soft.selectedIndex;
            if(softdrinkindex != null)
            {
                var selectedsoftdrink = soft.options[soft.selectedIndex].text;
                var price = parseInt(soft.options[soft.selectedIndex].value);
                totalcost = totalcost + price;
                s = s + selectedsoftdrink + "\t \t" + price + "\n";
            }
            s = s + "\n\n Total Cost \t \t" + totalcost;
            document.getElementById("ordereditems").value = s;
        }