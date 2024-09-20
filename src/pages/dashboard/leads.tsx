import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Loading from "~/components/Loading";
import LeadsTable from "~/components/Tables/LeadsTable";
import { api } from "~/utils/api";

const Leads = () => {
  const router = useRouter();
  const page = router.query.page ? parseInt(router.query.page as string) : 1;
  const { data: leadsData, isLoading } = api.formSubmission.getAll.useQuery({
    page,
  });
  const totalPages = leadsData?.count ? Math.ceil(leadsData?.count / 10) : 1;

  useEffect(() => {
    document.getElementById("TopPage")?.scrollIntoView({ behavior: "smooth" });
  }, [router]);

  return (
    <div className="m-4">
      <div className="my-6 text-xl font-extrabold" id="TopPage">
        Leads de pagina
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Pagination page={page} totalPages={totalPages} />
          <LeadsTable leads={leadsData?.data} />
          <Pagination page={page} totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

const Pagination = (props: { page: number; totalPages: number }) => {
  const { page, totalPages } = props;

  return (
    <div className="flex items-center gap-2 py-2">
      <Link
        href={`/dashboard/leads?page=${page - 1}`}
        aria-disabled={page === 1}
        prefetch={true}
      >
        <Button color="primary" disabled={page === 1}>
          <FaChevronLeft />
        </Button>
      </Link>
      <span>
        {page} / {totalPages}
      </span>
      <Link
        href={`/dashboard/leads?page=${page + 1}`}
        aria-disabled={page === totalPages}
        prefetch={true}
      >
        <Button color="primary" disabled={page === totalPages}>
          <FaChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default Leads;
