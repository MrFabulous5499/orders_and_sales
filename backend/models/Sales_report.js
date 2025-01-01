
module.exports  = (sequalize, DataTypes) => {

    const sales_reports = sequalize.define("sales_pdt_report", {
        Product:{ 
            type:DataTypes.STRING,
            allowNull : false
        },

        Product_SKU :{ 
            type:DataTypes.STRING,
            allowNull : false
        },
        Cashier_text :{ 
            type:DataTypes.STRING,
            allowNull : false
        },
        Gross_Sales :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        },
        Gross_Sales_PER :{ 
            type:DataTypes.STRING,
            allowNull : false
        }, 
        Net_Sales_With_Tax :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        },
        Taxes :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        }, 
        Discount_Amount :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        },
        Gross_Sales_Without_Tax :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        },
        Net_Sales :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        }, 
        Net_Sales_PER :{ 
            type:DataTypes.STRING,
            allowNull : false
        }, 
        Net_Quantity :{ 
            type:DataTypes.INTEGER,
            allowNull : false
        },  
        Cost  :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        }, 
        Return_Amount  :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        }, 
        Return_Quantity  :{ 
            type:DataTypes.INTEGER,
            allowNull : false
        },  
        Void_Amount  :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        }, 
        Void_Quantity  :{ 
            type:DataTypes.INTEGER,
            allowNull : false
        }, 
        Profit  :{ 
            type:DataTypes.DOUBLE,
            allowNull : false
        }, 

    })
    return sales_reports;
};