import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const transactions = [
  {
    id: "#TXN-2024-0156",
    vendor: "Adinkra Crafts",
    customer: "Sarah M.",
    amount: "$89.99",
    commission: "$8.99",
    status: "completed",
    date: "2 hours ago",
  },
  {
    id: "#TXN-2024-0155",
    vendor: "Sahara Textiles",
    customer: "James K.",
    amount: "$75.00",
    commission: "$7.50",
    status: "completed",
    date: "3 hours ago",
  },
  {
    id: "#TXN-2024-0154",
    vendor: "Maasai Beadwork",
    customer: "Maria L.",
    amount: "$45.00",
    commission: "$4.50",
    status: "pending",
    date: "5 hours ago",
  },
  {
    id: "#TXN-2024-0153",
    vendor: "Zulu Art Gallery",
    customer: "David R.",
    amount: "$125.00",
    commission: "$12.50",
    status: "completed",
    date: "1 day ago",
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left p-3 font-semibold text-sm">Transaction ID</th>
                <th className="text-left p-3 font-semibold text-sm">Vendor</th>
                <th className="text-left p-3 font-semibold text-sm">Customer</th>
                <th className="text-left p-3 font-semibold text-sm">Amount</th>
                <th className="text-left p-3 font-semibold text-sm">Commission</th>
                <th className="text-left p-3 font-semibold text-sm">Status</th>
                <th className="text-left p-3 font-semibold text-sm">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b last:border-0">
                  <td className="p-3 font-medium text-sm">{transaction.id}</td>
                  <td className="p-3 text-sm">{transaction.vendor}</td>
                  <td className="p-3 text-sm">{transaction.customer}</td>
                  <td className="p-3 font-semibold text-sm">{transaction.amount}</td>
                  <td className="p-3 text-sm text-accent">{transaction.commission}</td>
                  <td className="p-3">
                    <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                      {transaction.status}
                    </Badge>
                  </td>
                  <td className="p-3 text-sm text-muted-foreground">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
