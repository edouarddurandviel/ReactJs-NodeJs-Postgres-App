import { useState } from "react";
import { useOneCompanyQueryHook } from "./hooks/company-hook";
import Button from "../../components/Button";
import { useCompaniesQueryHook } from "./hooks/companies-hook";

const Index = () => {
  const [companyId, setCompanyId] = useState<number | null>(null);

  const { companies, isFetchingCompanies } = useCompaniesQueryHook();
  const { company, updateCompany, isFetchingCompany, deleteCompany } =
    useOneCompanyQueryHook(companyId);

  return (
    <div>
      <h3>TanStack query</h3>
      <p>
        Get all companies, <strong>paginate</strong> and view each{" "}
        <strong>company detail card</strong>
      </p>
      <div>
        {isFetchingCompanies && <span>Loading...</span>}
        {companies.isError && <span>Error...</span>}
      </div>
      <ul style={{ float: "left" }}>
        {companies &&
          companies.data &&
          companies.data.map((c: any) => (
            <>
              <li key={c.id}>{c.name}</li>
              <Button
                content="view"
                onClick={() => {
                  setCompanyId(c.id);
                }}
              />
              <Button
                content="delete"
                disabled={true}
                onClick={() => {
                  deleteCompany(c.id);
                }}
              />
            </>
          ))}
      </ul>

      {(company && company.data && (
        <>
          <div style={{ float: "right" }}>
            <div>Name: {company.data.name}</div>
            <div>Activity: {company.data.activity}</div>
            <div>Owner: {company.data.owner}</div>
          </div>
        </>
      )) ||
        (isFetchingCompany && <div>Is fetching company...</div>)}

      <Button
        content="update"
        disabled={true}
        onClick={() => {
          updateCompany({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      />
    </div>
  );
};

export default Index;
