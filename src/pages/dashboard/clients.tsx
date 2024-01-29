import Loading from "~/components/Loading";
import LeadsTable from "~/components/Tables/LeadsTable";
import { api } from "~/utils/api";

const Clients = () => {
  const { data: leadsData, isLoading } = api.formSubmission.getAll.useQuery();

  return (
    <div className="m-4">
      <div className="my-6 text-xl font-extrabold">Clientes</div>
      {isLoading ? <Loading /> : <LeadsTable leads={leadsData} />}
    </div>
  );
};

export default Clients;
