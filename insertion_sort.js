function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for(var i=1; i<array_size; i++)
    {
        var key = div_sizes[i];
        var j = i - 1;

        while(j >= 0 && div_sizes[j] > key)
        {
            div_update(divs[j], div_sizes[j], "yellow"); //Color update
            div_update(divs[j + 1], div_sizes[j + 1], "red"); //Color update

            // swapping the numbers on the bars
            var tempText = divs[j];
            divs[j] = divs[j + 1];
            divs[j + 1] = tempText;

            div_sizes[j + 1] = div_sizes[j];

            div_update(divs[j], div_sizes[j], "blue"); //Color update
            div_update(divs[j + 1], div_sizes[j + 1], "blue"); //Color update

            j -= 1;
        }

        div_sizes[j + 1] = key;

        div_update(divs[j + 1], div_sizes[j + 1], "green"); //Color update
    }

    enable_buttons();
}
