"use client";

import { Card } from "./ui/Card";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const ContactCard = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Card className='flex flex-col w-full h-full border border-custom bg-card-bg-secondary p-8'>
      <div className='mb-3'>
        <p className='text-sm text-text-secondary font-semibold  uppercase tracking-wide'>
          Have a project in mind?
        </p>
      </div>
      <div className='flex flex-col text-text-primary justify-center flex-grow'>
        <p className='text-[16px]  mt-2'>
          Let&apos;s schedule a time to talk about your project.
        </p>
      </div>
      <div className='flex justify-end mt-8'>
        <div className='w-full py-3 px-4 rounded-[16px] border border-custom bg-[var(--color-border)] text-text-primary font-medium hover:bg-card-bg-alt transition-all cursor-pointer flex items-center justify-center'>
          <button
            className='w-full'
            data-cal-namespace='15min'
            data-cal-link='tharanithar-r/15min'
            data-cal-config='{"layout":"month_view"}'
          >
            Click me
          </button>
        </div>
      </div>
    </Card>
  );
};
