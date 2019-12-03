window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: " "
        },
        axisY: {
            title: "Rainfall(MM)"
        },
        data: [{        
            type: "column",  
        
            
            
            dataPoints: [      
                { y: 2, label: "January" },
                { y: 4,  label: "February" },
                { y: 5,  label: "March" },
                { y: 12,  label: "April" },
                { y: 28,  label: "May" },
                { y: 143, label: "June" },
                { y: 177,  label: "July" },
                { y: 151,  label: "August" },
    { y: 197,  label: "September" },
    { y: 64,  label: "October" },
    { y: 24,  label: "November" },
    { y: 6,  label: "December" }
            ]
        }]
    });
    chart.render();
    
    }