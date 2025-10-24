export default function CompanyOverview() {
  return (
    <section className="flex flex-col gap-4 py-6">
      <h4 className="mb-2 font-semibold text-xl tracking-tight lg:text-2xl">
        Company overview
      </h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <span className="block text-muted-foreground text-sm">Size</span>
          <span className="font-medium">501 to 1000 Employees</span>
        </div>
        <div>
          <span className="block text-muted-foreground text-sm">Founded</span>
          <span className="font-medium">1974</span>
        </div>
        <div>
          <span className="block text-muted-foreground text-sm">Type</span>
          <span className="font-medium">Company - Private</span>
        </div>
        <div>
          <span className="block text-muted-foreground text-sm">Industry</span>
          <span className="font-medium">Legal</span>
        </div>
        <div>
          <span className="block text-muted-foreground text-sm">Sector</span>
          <span className="font-medium">Legal</span>
        </div>
        <div>
          <span className="block text-muted-foreground text-sm">Revenue</span>
          <span className="font-medium">$100 to $500 million (USD)</span>
        </div>
      </div>
    </section>
  );
}
