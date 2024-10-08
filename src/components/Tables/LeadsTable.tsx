import { FormSubmission } from "@prisma/client";
import React from "react";
import CopyButton from "../Buttons/CopyButton";
import { useRouter } from "next/router";

type Props = {
  leads: FormSubmission[] | undefined;
};

const LeadsTable = (props: Props) => {
  const leads = props.leads;

  return (
    <div>
      <table className="min-w-full divide-y divide-slate-200">
        <thead></thead>
        <tbody>
          {leads === undefined ? (
            <tr className="">
              <td
                colSpan={4}
                className="whitespace-nowrap px-6 py-4 text-sm text-gray-200"
              >
                No hay clientes
              </td>
            </tr>
          ) : (
            leads?.map((lead) => (
              <tr key={lead.id} className="group text-sm text-gray-200">
                <div className="grid-rows-max grid-cols-max m-2 grid grid-flow-row items-center gap-2 rounded-lg transition duration-300 ease-in-out group-odd:bg-slate-700/20 group-even:bg-slate-700/50 group-hover:bg-slate-500/30 group-active:bg-slate-500/40">
                  <div className="col-span-3 row-span-1 whitespace-nowrap px-2 pb-1 pl-6 pt-4 sm:col-span-1">
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-bold capitalize">
                        {lead.name}
                      </p>
                      <p className="text-slate-300 sm:hidden">
                        <div className="flex place-items-center gap-x-2 text-slate-300 sm:hidden">
                          <p>{lead.email}</p>
                          {lead.email?.length && (
                            <CopyButton text={lead.email as string} />
                          )}
                        </div>
                      </p>
                      <div className="flex place-items-center gap-x-2 text-slate-300 sm:hidden">
                        <p>{lead.phone}</p>
                        {lead.phone?.length && (
                          <CopyButton text={lead.phone as string} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1 hidden whitespace-nowrap px-2 lowercase sm:block">
                    <div className="">
                      <div className="flex place-items-center gap-x-2 text-slate-300">
                        <p>{lead.email}</p>
                        {lead.email?.length && (
                          <CopyButton text={lead.email as string} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 row-span-1 hidden whitespace-nowrap px-2 sm:block">
                    <div className="flex place-items-center gap-x-2">
                      <p>{lead.phone}</p>
                      {lead.phone?.length && (
                        <CopyButton text={lead.phone as string} />
                      )}
                    </div>
                  </div>
                  <div className="col-span-3 row-span-1 px-6">
                    <div className="border-b border-slate-300/50"></div>
                    <div className="mt-2 flex w-fit place-items-center gap-x-2 rounded-full bg-slate-600 px-4 text-slate-300">
                      <p>{lead.createdAt.toLocaleDateString("es-MX")}</p>
                    </div>
                    <p className="whitespace-pre-wrap px-2 pb-6 pt-4 text-sm text-slate-400">
                      {lead.message}
                    </p>
                  </div>
                </div>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;
