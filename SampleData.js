module.exports = SampleData
{
    index = 0;
    transactionType(number)
    {
        var transaction = ["Refinance", "Transfer", "Purchase"];
        var transType = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 3));
            transType[i] = transaction[this.index];
        }
        return transType;
    }
    productType(number)
    {
        var product = ["Prime", "Alternative"];
        var prodType = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 2));
            prodType[i] = product[this.index];
        }
        return prodType;
    }
    programType(number)
    {
        var program = ["Standard", "NewToCanada", "BFSAssist", "CreditRestorer", "Rental"];
        var progType = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 5));
            progType[i] = program[this.index];
        }
        return progType;
    }
    occupanctType(number)
    {
        var occupant = ["OwnerOccupied", "OwnerOccupiedPlusRental", "Rental", "SecondHome"];
        var occupy = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 4));
            occupy[i] = occupant[this.index];
        }
        return occupy;
    }
    equityTakeOutAmount(number, transactionType)
    {
        var equity = Array(number).fill(null);
        var amount = 0;
        for (i; i < number; i++)
        {
            if (transactionType[i]== "Purchase")
            {
                amount = parseInt((Math.random() * Number.MAX_VALUE));
                equity[i] = new String(amount).toString();
            }
            else if (transactionType[i]== "Refinance")
            {
                amount = parseInt((Math.random() * 200000));
                equity[i] = new String(amount).toString();
            }
            else if (transactionType[i]== "Transfer")
            {
                amount = parseInt((Math.random() * 1)) + 200000;
                equity[i] = new String(amount).toString();
            }
        }
        return equity;
    }
    varianceExceptionReceived(number, equity)
    {
        var variance = ["Received", "Not Received"];
        var varienceException = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 2));
            var equityAmt = Integer.parseInt(equity[i]);
            if (equityAmt > 200000)
            {
                varienceException[i] = "Received";
            }
            else 
            {
                varienceException[i] = "Not Received";
            }
        }
        return varienceException;
    }
    provinceName = [];
    cityName(number)
    {
        this.provinceName = Array(number).fill(0);
        var cities = [["Airdrie", "Grande Prairie", "Red Deer", "Beaumont", "Hanna", "St. Albert", "Bonnyville", "Hinton", "Spruce Grove", "Brazeau", "Irricana", "Strathcona County", "Breton", "Lacombe", "Strathmore", "Calgary", "Leduc", "Sylvan Lake", "Camrose", "Lethbridge", "Swan Hills", "Canmore", "McLennan", "Taber", "Didzbury", "Medicine Hat", "Turner Valley", "Drayton Valley", "Olds", "Vermillion", "Edmonton", "Onoway", "Wood Buffalo", "Ft. Saskatchewan", "Provost"], ["Burnaby", "Lumby", "City of Port Moody", "Cache Creek", "Maple Ridge", "Prince George", "Castlegar", "Merritt", "Prince Rupert", "Chemainus", "Mission", "Richmond", "Chilliwack", "Nanaimo", "Saanich", "Clearwater", "Nelson", "Sooke", "Colwood", "New Westminster", "Sparwood", "Coquitlam", "North Cowichan", "Surrey", "Cranbrook", "North Vancouver", "Terrace", "Dawson Creek", "North Vancouver", "Tumbler", "Delta", "Osoyoos", "Vancouver", "Fernie", "Parksville", "Vancouver", "Invermere", "Peace River", "Vernon", "Kamloops", "Penticton", "Victoria", "Kaslo", "Port Alberni", "Whistler", "Langley", "Port Hardy"], ["Birtle", "Flin Flon", "Swan River", "Brandon", "Snow Lake", "The Pas", "Cranberry Portage", "Steinbach", "Thompson", "Dauphin", "Stonewall", "Winnipeg"], ["Cap-Pele", "Miramichi", "Saint John", "Fredericton", "Moncton", "Saint Stephen", "Grand Bay-Westfield", "Oromocto", "Shippagan", "Grand Falls", "Port Elgin", "Sussex", "Memramcook", "Sackville", "Tracadie-Sheila"], ["Argentia", "Corner Brook", "Paradise", "Bishop\'s Falls", "Labrador City", "Portaux Basques", "Botwood", "Mount Pearl", "St. John\'s", "Brigus"], ["Town of Hay River", "Town of Inuvik", "Yellowknife"], ["Amherst", "Hants County", "Pictou", "Annapolis", "Inverness County", "Pictou County", "Argyle", "Kentville", "Queens", "Baddeck", "County of Kings", "Richmond", "Bridgewater", "Lunenburg", "Shelburne", "Cape Breton", "Lunenburg County", "Stellarton", "Chester", "Mahone Bay", "Truro", "Cumberland County", "New Glasgow", "Windsor", "East Hants", "New Minas", "Yarmouth", "Halifax", "Parrsboro"], ["Iqaluit "], ["Ajax", "Halton", "Peterborough", "Atikokan", "Halton Hills", "Pickering", "Barrie", "Hamilton", "Port Bruce", "Belleville", "Hamilton-Wentworth", "Port Burwell", "Blandford-Blenheim", "Hearst", "Port Colborne", "Blind River", "Huntsville", "Port Hope", "Brampton", "Ingersoll", "Prince Edward", "Brant", "James", "Quinte West", "Brantford", "Kanata", "Renfrew", "Brock", "Kincardine", "Richmond Hill", "Brockville", "King", "Sarnia", "Burlington", "Kingston", "Sault Ste. Marie", "Caledon", "Kirkland Lake", "Scarborough", "Cambridge", "Kitchener", "Scugog", "Chatham-Kent", "Larder Lake", "Souix Lookout CoC Sioux Lookout", "Chesterville", "Leamington", "Smiths Falls", "Clarington", "Lennox-Addington", "South-West Oxford", "Cobourg", "Lincoln", "St. Catharines", "Cochrane", "Lindsay", "St. Thomas", "Collingwood", "London", "Stoney Creek", "Cornwall", "Loyalist Township", "Stratford", "Cumberland", "Markham", "Sudbury", "Deep River", "Metro Toronto", "Temagami", "Dundas", "Merrickville", "Thorold", "Durham", "Milton", "Thunder Bay", "Dymond", "Nepean", "Tillsonburg", "Ear Falls", "Newmarket", "Timmins", "East Gwillimbury", "Niagara", "Toronto", "East Zorra-Tavistock", "Niagara Falls", "Uxbridge", "Elgin", "Niagara-on-the-Lake", "Vaughan", "Elliot Lake", "North Bay", "Wainfleet", "Flamborough", "North Dorchester", "Wasaga Beach", "Fort Erie", "North Dumfries", "Waterloo", "Fort Frances", "North York", "Waterloo", "Gananoque", "Norwich", "Welland", "Georgina", "Oakville", "Wellesley", "Glanbrook", "Orangeville", "West Carleton", "Gloucester", "Orillia", "West Lincoln", "Goulbourn", "Osgoode", "Whitby", "Gravenhurst", "Oshawa", "Wilmot", "Grimsby", "Ottawa", "Windsor", "Guelph", "Ottawa-Carleton", "Woolwich", "Haldimand-Norfork", "Owen Sound", "York"], ["Alberton", "Montague", "Stratford", "Charlottetown", "Souris", "Summerside", "Cornwall"], ["Alma", "Fleurimont", "Longueuil", "Amos", "Gaspe", "Marieville", "Anjou", "Gatineau", "Mount Royal", "Aylmer", "Hull", "Montreal", "Beauport", "Joliette", "Montreal Region", "Bromptonville", "Jonquiere", "Montreal-Est", "Brosssard", "Lachine", "Quebec", "Chateauguay", "Lasalle", "Saint-Leonard", "Chicoutimi", "Laurentides", "Sherbrooke", "Coaticook", "LaSalle", "Sorel", "Coaticook", "Laval", "Thetford Mines", "Dorval", "Lennoxville", "Victoriaville", "Drummondville", "Levis"], ["Avonlea", "Melfort", "Swift Current", "Colonsay", "Nipawin", "Tisdale", "Craik", "Prince Albert", "Unity", "Creighton", "Regina", "Weyburn", "Eastend", "Saskatoon", "Wynyard", "Esterhazy", "Shell Lake", "Yorkton", "Gravelbourg"], ["Carcross", "Whitehorse"]];
        var cityName = Array(number).fill(null);
        for (i; i < number; i++)
        {
            var province = parseInt((Math.random() * 11));
            var city = parseInt((Math.random() * cities[province].length));
            this.provinceName[i] = province;
            cityName[i] = cities[province][city];
        }
        return cityName;
    }
    provinceCode(number)
    {
        var provinceCode = Array(number).fill(null);
        var province = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"];
        for (i; i < number; i++)
        {
            provinceCode[i] = province[this.provinceName[i]];
        }
        return provinceCode;
    }
    postalCode(number)
    {
        var postalCodes = ["M2N", "T8L", "J5R", "A1N", "K6V"];
        var code = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random())) * 5;
            var num = (parseInt((Math.random() * (90 - 65)))) + 65;
            var randomChars = String.fromCharCode(num);
            code[i] = postalCode[this.index] + " " + (parseInt((Math.random() * 9))) + randomChars + (parseInt((Math.random() * 9)));
        }
        return code;
    }
    fsa(number)
    {
        var fsaValues = ["M2N", "T8L", "J5R", "A1N", "K6V"];
        var fsa = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 5));
            fsa[i] = fsaValues[this.index];
        }
        return fsa;
    }
    dwellingType(number)
    {
        var dwellingValues = ["Detached", "SemiDetached", "Townhouse", "Appartment", "Duplex", "Triplex", "Fourplex", "DuplexDetached", "DuplexSemiDetached", "RowHousing", "ApartmentLowRise", "ApartmentHighRise", "Mobile", "TriPlexDetached", "TriPlexSemiDetached", "Stacked", "ModularHomeDetached", "ModularHomeSemiDetached", "FourPlexDetached", "FourPlexSemiDetached"];
        var dwellingType = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 20));
            dwellingType[i] = dwellingValues[this.index];
        }
        return dwellingType;
    }
    approvedLendingAreas(number)
    {
        var ApprovedLendingAreasValues = ["Medium", "Major"];
        var ApprovedLendingAreas = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 2));
            ApprovedLendingAreas[i] = ApprovedLendingAreasValues[this.index];
        }
        return ApprovedLendingAreas;
    }
    loanAmount(number)
    {
        var loanAmount = Array(number).fill(null);
        for (i; i < number; i++)
        {
            var amount = parseInt((Math.random() * 10000000));
            loanAmount[i] = new String(amount).toString();
        }
        return loanAmount;
    }
    policyException(number, loanAmount)
    {
        var policyException = Array(number).fill(null);
        var loanAmt = 0;
        for (i; i < number; i++)
        {
            loanAmt = Integer.parseInt(loanAmount[i]);
            if (loanAmt > 2500000)
            {
                policyException[i] = "Received";
            }
            else 
            {
                policyException[i] = "Not Received";
            }
        }
        return policyException;
    }
    ltv(number)
    {
        var ltv = Array(number).fill(null);
        var ltvValues = [80, 65, 75, 80, 65, 75, 60, 90, 95, 95.0];
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 10));
            ltv[i] = new String(ltvValues[this.index] / 100).toString();
        }
        return ltv;
    }
    downPaymentSource(number)
    {
        var paySource = ["SaleOfExistingProperty", "PersonalCash", "RRSP", "BorrowedAgainstLiquidAssets", "Gift", "SweatEquity", "Other", "ExistingEquity", "SecondaryFinancing", "Grants", "Borrowed", "Own Resources"];
        var downPayment = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 12));
            downPayment[i] = paySource[this.index];
        }
        return downPayment;
    }
    creditScore(number)
    {
        var creditScore = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 751));
            creditScore[i] = new String(this.index).toString();
        }
        return creditScore;
    }
    primaryApplicantInd(numbOfRecords)
    {
        var givenValues = ["Primary", "Not Primary"];
        // The array size is determined by the number of Records requested
        var primaryApplicantInd = Array(numbOfRecords).fill(null);
        for (i; i < numbOfRecords; i++)
        {
            var index = parseInt((Math.random() * (givenValues.length)));
            primaryApplicantInd[i] = givenValues[index];
        }
        return primaryApplicantInd;
    }
    grossDebtService(numbOfRecords)
    {
        // array to be returned
        // the array size is determined by the number of Records requested
        var grossDebtService = Array(numbOfRecords).fill(null);
        for (i; i < numbOfRecords; i++)
        {
            grossDebtService[i] = (float)(Math.random() * (60)) + "%";
        }
        return grossDebtService;
    }
    totalDebtService(numbOfRecords)
    {
        // array to be returned
        // the array size is determined by the number of Records requested
        var totalDebtService = Array(numbOfRecords).fill(null);
        for (i; i < numbOfRecords; i++)
        {
            totalDebtService[i] = (float)(Math.random() * (60)) + "%";
        }
        return totalDebtService;
    }
    qualifiedIncomeInd(number)
    {
        var qualifiedIncome = ["Qualified", "Not Qualified"];
        var qualifiedIncomes = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 2));
            qualifiedIncomes[i] = qualifiedIncome[this.index];
        }
        return qualifiedIncomes;
    }
    totalIncome(number)
    {
        var total = Array(number).fill(null);
        for (i; i < number; i++)
        {
            var amount = (parseInt((Math.random() * (Number.MAX_VALUE - 90000)))) + 90000;
            total[i] = new String(amount).toString();
        }
        return total;
    }
    residencyType(number)
    {
        var resident = ["Primary", "Not Primary"];
        var residency = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 2));
            residency[i] = resident[this.index];
        }
        return residency;
    }
    areaName(number)
    {
        var areas = ["GVA", "Victoria", "Abbotsford", "Mission", "Squamish", "Whistler", "Rest of British Columbia", "Calgary", "Edmonton", "Rest of Alberta", "Winnipeg", "Rest of Manitoba", "Greater Toronto Area", "Rest of Ontario", "Otherwise"];
        var area = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 14));
            area[i] = areas[this.index];
        }
        return area;
    }
    // Business requirement not clear so purchase price is capped at 10 Million
    purchasePrice(number)
    {
        var purchasePrice = Array(number).fill(null);
        for (i; i < number; i++)
        {
            purchasePrice[i] = new String((float)(Math.random() * 10000000)).toString();
        }
        return purchasePrice;
    }
    // Business requirement not clear so paying off debt capped to 50 years
    amortazationTermsInYears(number)
    {
        var amortazationTermsInYears = Array(number).fill(null);
        for (i; i < number; i++)
        {
            amortazationTermsInYears[i] = new String(parseInt((Math.random() * 50))).toString();
        }
        return amortazationTermsInYears;
    }
    previouslyInsure(number, transactionType, productType)
    {
        var insure = ["Previously Insured", "Not Previously Insured"];
        var insurance = Array(number).fill(null);
        for (i; i < number; i++)
        {
            if (transactionType[i] == "Transfer" && productType[i] == "Prime")
            {
                insurance[i] = "Previously Insured";
            }
            else 
            {
                insurance[i] = "Not Previously Insured";
            }
        }
        return insurance;
    }
    propertyOwnershipType(number)
    {
        var OwnershipType = ["Condominium", "Freehold"];
        var OwnershipTypes = Array(number).fill(null);
        for (i; i < number; i++)
        {
            this.index = parseInt((Math.random() * 2));
            OwnershipTypes[i] = OwnershipType[this.index];
        }
        return OwnershipTypes;
    }
    baseAmount(number)
    {
        var baseAmount = Array(number).fill(null);
        for (i; i < number; i++)
        {
            baseAmount[i] = new String((float)(Math.random() * 925000) + 50000).toString();
        }
        return baseAmount;
    }
}