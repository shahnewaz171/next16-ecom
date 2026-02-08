'use client';

import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence as FramerAnimatePresence, motion } from 'framer-motion';
import type { ComponentProps } from 'react';

export function MotionDiv(props: HTMLMotionProps<'div'>) {
  return <motion.div {...props}>{props.children}</motion.div>;
}

export function MotionP(props: HTMLMotionProps<'p'>) {
  return <motion.p {...props}>{props.children}</motion.p>;
}

export function MotionH1(props: HTMLMotionProps<'h1'>) {
  return <motion.h1 {...props}>{props.children}</motion.h1>;
}

export function MotionH2(props: HTMLMotionProps<'h2'>) {
  return <motion.h2 {...props}>{props.children}</motion.h2>;
}

export function MotionHeader(props: HTMLMotionProps<'header'>) {
  return <motion.header {...props}>{props.children}</motion.header>;
}

export function MotionSpan(props: HTMLMotionProps<'span'>) {
  return <motion.span {...props}>{props.children}</motion.span>;
}

export function MotionSection(props: HTMLMotionProps<'section'>) {
  return <motion.section {...props}>{props.children}</motion.section>;
}

export function AnimatePresence(props: ComponentProps<typeof FramerAnimatePresence>) {
  return <FramerAnimatePresence {...props}>{props.children}</FramerAnimatePresence>;
}
