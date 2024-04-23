let form = document.getElementById('myform');
form.addEventListener("submit", function (e) {
    e.preventDefault()

    let bs_salary = Number(document.getElementById('Basic_salary').value)
    let b_fits = Number(document.getElementById('Benefits').value)

    let totalgross_salary = gross_slary(bs_salary, b_fits)
    document.getElementById('g1').innerHTML = totalgross_salary

    let total_nhif = nhif(totalgross_salary)
    document.getElementById('nhif1').innerHTML = total_nhif

    let NSSF = calc_nssf(totalgross_salary)
    document.getElementById('nssf1').innerHTML = NSSF

    let NHDF = nhdf(totalgross_salary)
    document.getElementById('nhdf1').innerHTML = NHDF

    let totaltax_income = taxable_income(totalgross_salary, NSSF, NHDF)
    document.getElementById('taxincome').innerHTML = totaltax_income

    let total_payee = calc_payee(totaltax_income)
    document.getElementById('payee1').innerHTML = total_payee

    let net_salary = calc_net_salary(totalgross_salary, NHDF, NSSF, total_nhif, total_payee)
    console.log(net_salary)
    document.getElementById('netpay1').innerHTML = net_salary
})

function gross_slary(a, b) {
    let gross_slary = a + b
    return gross_slary
}


function nhif(gros_salary) {
    let nhif_contribution = 0
    if (gros_salary > 0 && gros_salary <= 5999) {
        nhif_contribution = 150
    }
    else if (gros_salary >= 6000 && gros_salary <= 7999) {
        nhif_contribution = 300
    }
    else if (gros_salary >= 8000 && gros_salary <= 11999) {
        nhif_contribution = 400
    }
    else if (gros_salary >= 12000 && gros_salary <= 14999) {
        nhif_contribution = 500
    }
    else if (gros_salary >= 15000 && gros_salary <= 19000) {
        nhif_contribution = 600
    }
    else if (gros_salary >= 20000 && gros_salary <= 24999) {
        nhif_contribution = 750
    }
    else if (gros_salary >= 25000 && gros_salary <= 29999) {
        nhif_contribution = 850
    }
    else if (gros_salary >= 30000 && gros_salary <= 34999) {
        nhif_contribution = 900
    }
    else if (gros_salary >= 35000 && gros_salary <= 39999) {
        nhif_contribution = 950
    }
    else if (gros_salary >= 40000 && gros_salary <= 44999) {
        nhif_contribution = 1000
    }
    else if (gros_salary >= 45000 && gros_salary <= 49999) {
        nhif_contribution = 1100
    }
    else if (gros_salary >= 50000 && gros_salary <= 59999) {
        nhif_contribution = 1200
    }
    else if (gros_salary >= 60000 && gros_salary <= 69999) {
        nhif_contribution = 1300
    }
    else if (gros_salary >= 70000 && gros_salary <= 79999) {
        nhif_contribution = 1400
    }
    else if (gros_salary >= 80000 && gros_salary <= 89999) {
        nhif_contribution = 1500
    }
    else if (gros_salary >= 90000 && gros_salary <= 99999) {
        nhif_contribution = 1600
    }
    else if (gros_salary >= 90000 && gros_salary <= 99999) {
        nhif_contribution = 1600
    }
    else {
        nhif_contribution = 1700

    }
    return nhif_contribution
}


function calc_nssf(x, rate = 0.06) {
    let total_nhif = 0
    if (x >= 0 && x <= 18000) {
        total_nhif = (x * rate)
    }
    else {
        total_nhif = 18000 * 0.06
    }
    return total_nhif
}



function nhdf(gs, rate = 0.015) {
    let calc_nhdf = gs * rate
    return calc_nhdf
}




function taxable_income(gs, ns, nh) {
    let tax_income = gs - (ns + nh)
    return tax_income
}



function calc_payee(tax) {
    let payee = 0
    let relief = 2400

    if (tax > 0 && tax <= 24000) {
        payee = 0
    }
    else if (tax > 24000 && tax <= 32333) {
        payee = (24000 * 0.1) + ((tax - 24000) * 0.25) - (relief)
    }
    else if (tax > 32333 && tax <= 500000) {
        payee = (24000 * 0.1) + (8333 * 0.25) + ((tax - 32333) * 0.3) - (relief)
    }
    else {
        payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((tax - 500000) * 0.325) - (relief)
    }
    return payee
}

function calc_net_salary(grs, nh1, nd1, ns1, pay) {
    let my_salary = grs - (nh1 + nd1 + ns1 + pay)
    return my_salary
}