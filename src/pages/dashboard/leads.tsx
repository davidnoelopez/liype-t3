import Loading from "~/components/Loading";
import LeadsTable from "~/components/Tables/LeadsTable";
import { api } from "~/utils/api";

const Leads = () => {
  const { data: leadsData, isLoading } = api.formSubmission.getAll.useQuery();

  return (
    <div className="m-4">
      <div className="my-6 text-xl font-extrabold">Leads de pagina</div>
      {isLoading ? <Loading /> : <LeadsTable leads={leadsData} />}
    </div>
  );
};

export default Leads;
