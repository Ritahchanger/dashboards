import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import BalanceSheet from "./pages/BalanceSheet";

import IncomeStatement from "./pages/IncomeStatement";

import JournalEntries from "./pages/JournalEntries";

import CustomerList from "./pages/CustomerList";

import AddCustomer from "./pages/AddCustomer";

import ImportCustomers from "./pages/ImportCustomers";

import GroupsList from "./pages/GroupsList";

import LoanApplication from "./pages/LoanApplication";

import ImportLoanApplication from "./pages/ImportLoanApplication";

import ShareAccounts from "./pages/ShareAccounts";

import SavingsAccounts from "./pages/SavingsAccounts";

import ImportSavings from "./pages/ImportSavings";

import LoanProductsList from "./pages/LoanProductsList";

import NewLoanProductsList from "./pages/NewLoanProductList";

import Branches from "./pages/Branches";

import StandingInstructionsRunHistory from "./pages/StandingInstructionsRunHistory";

import ImportWIthdrawals from "./pages/ImportWithdrawals";

import SingleCustomer from "./pages/SingleCustomer";

import AddNewShareProduct from "./pages/AddNewShareProduct";

import SharesProductList from "./pages/ShareProductList";

import SavingsProductList from "./pages/SavingsProductList";

import AddNewSavings from "./pages/AddNewSavings";

import Reports from "./pages/NavbarPages/Reports/Reports";

import SystemUsers from "./pages/NavbarPages/SystemUsers/SystemUsers";

import Organization from "./pages/NavbarPages/Organisation/Organisation";

import System from "./pages/NavbarPages/System/System";

import Products from "./pages/NavbarPages/Products/Products";

import ExternalServices from "./pages/NavbarPages/ExternalServices/ExternalServices";

import BulkImports from "./pages/NavbarPages/BulkImports/BuilkImports";

import Accounting from "./pages/NavbarPages/Accounting/Accounting";
import ListOfAccounts from "./pages/NavbarPages/ListOfAccounts/ListOfAccounts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/fintec/dashboard" element={<Dashboard />} />
        <Route path="/reports/balance-sheet" element={<BalanceSheet />} />
        <Route path="/reports/income-statement" element={<IncomeStatement />} />
        <Route path="/fintec/journal-entries" element={<JournalEntries />} />
        <Route path="/fintec/customers/list" element={<CustomerList />} />
        <Route path="/fintec/customers/list/:id" element={<SingleCustomer />} />
        <Route path="/fintec/customers/add" element={<AddCustomer />} />
        <Route path="/fintec/customers/import" element={<ImportCustomers />} />
        <Route path="/fintec/groups/list" element={<GroupsList />} />
        <Route path="/fintec/loan-applications" element={<LoanApplication />} />
        <Route
          path="/fintec/loan-applications/import"
          element={<ImportLoanApplication />}
        />
        <Route path="/fintec/accounts/share" element={<ShareAccounts />} />
        <Route path="/fintec/accounts/savings" element={<SavingsAccounts />} />
        <Route
          path="/fintec/savings-accounts/import"
          element={<ImportSavings />}
        />
        <Route
          path="/fintec/loan-products/list"
          element={<LoanProductsList />}
        />
        <Route
          path="/fintec/loan-products/new"
          element={<NewLoanProductsList />}
        />
        <Route path="/fintec/branches" element={<Branches />} />

        <Route
          path="/fintec/savings-accounts/standing-instructions-history"
          element={<StandingInstructionsRunHistory />}
        />
        <Route
          path="/fintec/savings-accounts/import-withdrawals"
          element={<ImportWIthdrawals />}
        />
        <Route
          path="/fintec/shares/products/list"
          element={<SharesProductList />}
        />
        <Route
          path="/fintec/shares/products/add/new"
          element={<AddNewShareProduct />}
        />
        <Route
          path="/fintec/savings/product/add/list"
          element={<SavingsProductList />}
        />
        <Route
          path="/fintec/savings/product/add/new"
          element={<AddNewSavings />}
        />

        <Route path="/fintec/reports/list" element={<Reports />} />
        <Route path="/fintec/system/users" element={<SystemUsers />} />
        <Route path="/fintec/admin/organization" element={<Organization />} />
        <Route path="/fintec/admin/system" element={<System />} />
        <Route path="/fintec/admin/products" element={<Products />} />
        <Route
          path="/fintec/admin/externalservices"
          element={<ExternalServices />}
        />
        <Route path="/fintec/admin/bulkimport" element={<BulkImports />} />
        <Route path="/app/accounting" element={<Accounting />} />
        <Route path="/app/accounting/coa" element={<ListOfAccounts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
