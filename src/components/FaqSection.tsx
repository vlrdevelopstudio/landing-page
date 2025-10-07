import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Container from "./Container";
import { Button } from "@/components/ui/button";

type FaqItem = { question: string; answer: string };

const ITEMS: FaqItem[] = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function FAQAccordion({
  items = ITEMS,
}: {
  items?: FaqItem[];
}) {
  return (
    <Container>
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Grid 1/3 – 2/3 */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
            {/* KIRI: 1/3 (gambar penuh kolom) */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-none overflow-hidden rounded-2xl">
                <CardContent className="p-0">
                  {/* Tinggi konsisten + cover */}
                  <img
                    src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-1.jpg"
                    alt="FAQ illustration"
                    className="w-full rounded-2xl object-cover
                               aspect-[4/5] sm:aspect-[4/5] lg:h-[560px] lg:aspect-auto"
                  />
                </CardContent>
              </Card>
            </div>

            {/* KANAN: 2/3 (accordion) */}
            <div className="lg:col-span-2 px-5 py-10">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Have a different question? Reach our team by{" "}
                  <Button
                    variant="link"
                    className="px-0 align-baseline text-indigo-600 hover:text-indigo-700"
                    asChild
                  >
                    <a href="mailto:support@example.com">sending us an email</a>
                  </Button>
                  .
                </p>
              </div>

              <Accordion
                type="single"
                collapsible
                defaultValue="item-0"
                className="mt-10 divide-y divide-slate-200 border-t border-b border-slate-200"
              >
                {items.map((it, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="group flex w-full items-center justify-between py-5 text-left text-base font-semibold text-slate-900 hover:no-underline">
                      <span className="pr-6">{it.question}</span>
                    </AccordionTrigger>

                    <AccordionContent className="pb-6 pr-10 text-slate-600">
                      {it.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
