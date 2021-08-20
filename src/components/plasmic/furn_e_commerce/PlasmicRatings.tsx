// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oziCwM22VswxiFyZsu5zc9
// Component: sAzIJy6R524j
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: oziCwM22VswxiFyZsu5zc9/projectcss
import * as sty from "./PlasmicRatings.module.css"; // plasmic-import: sAzIJy6R524j/css

import StarIcon from "./icons/PlasmicIcon__Star"; // plasmic-import: hp4_RscspCNT/icon

export type PlasmicRatings__VariantMembers = {
  stars: "zero" | "one" | "two" | "three" | "four" | "five";
};

export type PlasmicRatings__VariantsArgs = {
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
};

type VariantPropType = keyof PlasmicRatings__VariantsArgs;
export const PlasmicRatings__VariantProps = new Array<VariantPropType>("stars");

export type PlasmicRatings__ArgsType = {
  numReviews?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRatings__ArgsType;
export const PlasmicRatings__ArgProps = new Array<ArgPropType>("numReviews");

export type PlasmicRatings__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultRatingsProps {
  numReviews?: React.ReactNode;
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
  className?: string;
}

function PlasmicRatings__RenderFunc(props: {
  variants: PlasmicRatings__VariantsArgs;
  args: PlasmicRatings__ArgsType;
  overrides: PlasmicRatings__OverridesType;
  dataFetches?: PlasmicRatings__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__stars_five]: hasVariant(variants, "stars", "five"),
        [sty.root__stars_four]: hasVariant(variants, "stars", "four"),
        [sty.root__stars_one]: hasVariant(variants, "stars", "one"),
        [sty.root__stars_three]: hasVariant(variants, "stars", "three"),
        [sty.root__stars_two]: hasVariant(variants, "stars", "two"),
        [sty.root__stars_zero]: hasVariant(variants, "stars", "zero")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        {(hasVariant(variants, "stars", "zero") ? false : true) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__kWn8E, {
              [sty.svg__stars_five__kWn8EmMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_zero__kWn8EZbClo]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? false
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__f2O1K, {
              [sty.svg__stars_five__f2O1KmMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__f2O1KnYb1D]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one__f2O1KMwgxZ]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three__f2O1K6Dg8H]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__f2O1KcDawa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero__f2O1KZbClo]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? false
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? false
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__pVgQ4, {
              [sty.svg__stars_five__pVgQ4MMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__pVgQ4NYb1D]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one__pVgQ4MwgxZ]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three__pVgQ46Dg8H]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__pVgQ4CDawa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero__pVgQ4ZbClo]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? false
            : hasVariant(variants, "stars", "two")
            ? false
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? false
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__kPGo, {
              [sty.svg__stars_five__kPGomMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__kPGonYb1D]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one__kPGoMwgxZ]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three__kPGo6Dg8H]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__kPGoCDawa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero__kPGoZbClo]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? false
            : hasVariant(variants, "stars", "three")
            ? false
            : hasVariant(variants, "stars", "two")
            ? false
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? false
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__kra9V, {
              [sty.svg__stars_five__kra9VmMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__kra9VnYb1D]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one__kra9VMwgxZ]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three__kra9V6Dg8H]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__kra9VcDawa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero__kra9VZbClo]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? false
            : hasVariant(variants, "stars", "four")
            ? false
            : hasVariant(variants, "stars", "three")
            ? false
            : hasVariant(variants, "stars", "two")
            ? false
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? true
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg___5Vg5F, {
              [sty.svg__stars_five___5Vg5FmMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four___5Vg5FnYb1D]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one___5Vg5FMwgxZ]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three___5Vg5F6Dg8H]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two___5Vg5FcDawa]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero___5Vg5FZbClo]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? false
            : hasVariant(variants, "stars", "four")
            ? false
            : hasVariant(variants, "stars", "three")
            ? false
            : hasVariant(variants, "stars", "two")
            ? false
            : true
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__x5NRd, {
              [sty.svg__stars_five__x5NRdmMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__x5NRdnYb1D]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_three__x5NRd6Dg8H]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__x5NRdCDawa]: hasVariant(
                variants,
                "stars",
                "two"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? false
            : hasVariant(variants, "stars", "four")
            ? false
            : hasVariant(variants, "stars", "three")
            ? false
            : true
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__pPk99, {
              [sty.svg__stars_five__pPk99MMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__pPk99NYb1D]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_three__pPk996Dg8H]: hasVariant(
                variants,
                "stars",
                "three"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? false
            : hasVariant(variants, "stars", "four")
            ? false
            : true
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__a5Sb2, {
              [sty.svg__stars_five__a5Sb2MMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__a5Sb2NYb1D]: hasVariant(
                variants,
                "stars",
                "four"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(hasVariant(variants, "stars", "five") ? false : true) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__xTea0, {
              [sty.svg__stars_five__xTea0MMRsB]: hasVariant(
                variants,
                "stars",
                "five"
              )
            })}
            role={"img"}
          />
        ) : null}
      </p.Stack>

      {p.renderPlasmicSlot({
        defaultContents: "(45 Review)",
        value: args.numReviews,
        className: classNames(sty.slotNumReviews)
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRatings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRatings__VariantsArgs;
    args?: PlasmicRatings__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicRatings__Fetches;
  } & Omit<PlasmicRatings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRatings__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRatings__ArgProps,
      internalVariantPropNames: PlasmicRatings__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicRatings__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatings";
  } else {
    func.displayName = `PlasmicRatings.${nodeName}`;
  }
  return func;
}

export const PlasmicRatings = Object.assign(
  // Top-level PlasmicRatings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicRatings
    internalVariantProps: PlasmicRatings__VariantProps,
    internalArgProps: PlasmicRatings__ArgProps
  }
);

export default PlasmicRatings;
/* prettier-ignore-end */
