import { Button } from "flowbite-react";
import Loading from "~/components/Loading";
import { api } from "~/utils/api";

const Leads = () => {
  const { data: clientsData, isLoading } = api.formSubmission.getAll.useQuery();

  return (
    <div className="m-4">
      <div className="my-6 text-xl font-extrabold">Leads de pagina</div>
      <Button color="primary">Primary</Button>
      {isLoading ? <Loading /> : <LeadsTable leads={clientsData} />}
    </div>
  );
};

export default Leads;
