import {SampleData} from './SampleData.js';

async function saveData() {
    try{
        const csvFile = require('csv-parser');
        const fs = require('fs');

        fs.createReadStream('Bank of Canada.csv').
            pipe(csv()).on('data',(row) => {
                console.log(row);
        })

        const data = new SampleData();
        var numberOfRecords = document.getElementById("save");

        let transactionType = data.transactionType(numberOfRecords);
        let productType = data.productType(numberOfRecords);
        let programType = data.programType(numberOfRecords);
        let occupanctType = data.occupanctType(numberOfRecords);
        let equityTakeOutAmount = data.equityTakeOutAmount(numberOfRecords);
        let varianceExceptionReceived = data.varianceExceptionReceived(numberOfRecords);
        let cityName = data.cityName(numberOfRecords);
        let provinceCode = data.provinceCode(numberOfRecords);
        let postalCode = data.postalCode(numberOfRecords);
        let fsa = data.fsa(recordsNumber);
        let dwellingType = data.dwellingType(recordsNumber);
        let approvedLendingAreas = data.approvedLendingAreas(recordsNumber);
        let loanAmount = data.loanAmount(recordsNumber);
        let policyException = data.policyException(recordsNumber,loanAmount);
        let ltv = data.ltv(recordsNumber);
        let downPaymentSource = data.downPaymentSource(recordsNumber);
        let creditScore = data.creditScore(recordsNumber);
        let primaryApplicantInd = data.primaryApplicantInd(recordsNumber);
        let grossDebtService = data.grossDebtService(recordsNumber);
        let totalDebtService = data.totalDebtService(recordsNumber);
        let qualifiedIncomeInd = data.qualifiedIncomeInd(recordsNumber);
        let totalIncome = data.totalIncome(recordsNumber);
        let residencyType = data.residencyType(recordsNumber);
        let areaName = data.areaName(recordsNumber);
        let purchasePrice = data.purchasePrice(recordsNumber);
        let amortazationTermsInYears = data.amortazationTermsInYears(recordsNumber);
        let previouslyInsure = data.previouslyInsure(recordsNumber,transactionType,productType);
        let propertyOwnershipType = data.propertyOwnershipType(recordsNumber);
        let baseAmount = data.baseAmount(recordsNumber);

        let records = [[transactionType],[productType],[programType],[occupanctType],[equityTakeOutAmount],[varianceExceptionReceived],[cityName],
            [provinceCode],[postalCode],[fsa],[dwellingType],[approvedLendingAreas],[loanAmount],[policyException], [ltv],[downPaymentSource],[creditScore],
            [primaryApplicantInd],[grossDebtService],[totalDebtService],[qualifiedIncomeInd],[totalIncome],[residencyType],[areaName],[purchasePrice],
            [amortazationTermsInYears],[previouslyInsure],[propertyOwnershipType],[baseAmount]];

        let row = records.length;
        let column = numberOfRecords;
        

        let transpose = [[column][row]];

        var csv = "";
        for (let row of transpose) {
            for (let col of row) { csv += col + ","; }
            csv += "\r\n";
        }

        var createCSV = new CreateCSV([csv],{type:"text/csv"});

        const fileHandle = await window.showSaveFilePicker({
            suggestedName : "Canada Bank.csv",
            types: [{
              description: "CSV file",
              accept: {"text/csv": [".csv"]}
            }]
          });

          const fileStream = await fileHandle.createWritable();

          // Write file
            await fileStream.write(createCSV);
            await fileStream.close();

        // for(i = 0; i < row; i++) {
        //     for(j = 0; j < column; j++) {
        //         transpose[j][i] = records[i][j];
        //     }
        // }

        // let csvContent = "data:text/csv;charset=utf-8,";

        // data.forEach(function(rowArray) {
        //     let row = rowArray.join(",");
        //     csvContent += row + "\r\n";
        // });
        
        
        alert("Data saved");
    } 
    catch(err) {
        console.trace();
    }    
}