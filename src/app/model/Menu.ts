export class Menu {
  public static menulist: Array<any> = [
    {
      administration: [
        { path: "displayemployee", title: "Display Employee", icon: "fa fa-list", class: "" },
        { path: "createemployee", title: "Create Employee", icon: "fa fa-user", class: "" }
       
      ],
      account: [
        { path: "displayloanaccount", title: "Display Loan A/c", icon: "fa fa-list", class: "" },
        { path: "loandisbursement", title: "Loan Disbursement", icon: "fa fa-money", class: "" },
      ],
      credit: [
        { path: "displayloanapplication", title: "Display Loan A/c", icon: "fa fa-list", class: "" },
        { path: "loanapplication", title: "Loan Application", icon: "fa fa-file", class: "" },
       
      ],       
      customer: [
        { path: "loanstatus", title: "Account", icon:"fa fa-user", class: "" }        
      ],
      operational: [
        { path: "displayloanapplication", title: "Display Loan A/c", icon:"fa fa-list", class: "" },
        { path: "loanapplication", title: "Loan Application", icon:"fa fa-file", class: "" },        
        { path: "loansanction", title: "Sanction Letter", icon:"fa fa-file", class: "" }        
      ],
      relational: [
        { path: "displayloanapplication", title: "Display Loan A/c", icon:"fa fa-list", class: "" },      
        { path: "loanapplication", title: "Loan Application", icon:"fa fa-file", class: "" }        
      ]
    }
  ]
}
