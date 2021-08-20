// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oziCwM22VswxiFyZsu5zc9
// Component: YKfkw43kjpHc
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
import LinkButton from "../../LinkButton"; // plasmic-import: Kd7NUR2FS6PR/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: oziCwM22VswxiFyZsu5zc9/projectcss
import * as sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: YKfkw43kjpHc/css

import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: ExdW8f4r50uT/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: vqeo5QL-3OcD/icon
import slider1Rv9Ddjsm5PBg from "./images/slider1.png"; // plasmic-import: RV9Ddjsm5pBG/picture
import slider2KhGaFfv9WOkR from "./images/slider2.png"; // plasmic-import: khGaFfv9wOkR/picture
import slider3UjvTyKVPeQp from "./images/slider3.png"; // plasmic-import: ujvTyK_VPeQP/picture

export type PlasmicProductCarousel__VariantMembers = {
  slider: "first" | "second" | "third";
};

export type PlasmicProductCarousel__VariantsArgs = {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
};

type VariantPropType = keyof PlasmicProductCarousel__VariantsArgs;
export const PlasmicProductCarousel__VariantProps = new Array<VariantPropType>(
  "slider"
);

export type PlasmicProductCarousel__ArgsType = {};
type ArgPropType = keyof PlasmicProductCarousel__ArgsType;
export const PlasmicProductCarousel__ArgProps = new Array<ArgPropType>();

export type PlasmicProductCarousel__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<"img">;
};

export interface DefaultProductCarouselProps {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
  className?: string;
}

function PlasmicProductCarousel__RenderFunc(props: {
  variants: PlasmicProductCarousel__VariantsArgs;
  args: PlasmicProductCarousel__ArgsType;
  overrides: PlasmicProductCarousel__OverridesType;
  dataFetches?: PlasmicProductCarousel__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__bdFz5)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox___4JOs4, {
            [sty.freeBox__slider_second___4JOs4YwOel]: hasVariant(
              variants,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__atOo2
            )}
          >
            {"Great Design Collection"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__srj1Q,
              {
                [sty.freeBox__slider_first__srj1QsNkQ]: hasVariant(
                  variants,
                  "slider",
                  "first"
                ),
                [sty.freeBox__slider_second__srj1QywOel]: hasVariant(
                  variants,
                  "slider",
                  "second"
                ),
                [sty.freeBox__slider_third__srj1Q4LyPy]: hasVariant(
                  variants,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant(variants, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant(variants, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__uihRn
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__arx)}>
            <div className={classNames(defaultcss.all, sty.freeBox__gAr4S)} />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__sWeCu,
                {
                  [sty.freeBox__slider_second__sWeCuywOel]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),
                  [sty.freeBox__slider_third__sWeCu4LyPy]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $299.00"
                : hasVariant(variants, "slider", "second")
                ? " $199.00"
                : " $399.00"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox___7Z4Aj,
                {
                  [sty.freeBox__slider_first___7Z4AjsNkQ]: hasVariant(
                    variants,
                    "slider",
                    "first"
                  ),
                  [sty.freeBox__slider_second___7Z4AjywOel]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),
                  [sty.freeBox__slider_third___7Z4Aj4LyPy]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $399.00"
                : hasVariant(variants, "slider", "second")
                ? " $299.00"
                : " $499.00"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__uDSwN)}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__nPkxh)}
              text={"⊕ Add to cart"}
              type={"solidOrange" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__xEk3G)}
              text={"More Info"}
              type={"blankOrange" as const}
            />
          </p.Stack>
        </p.Stack>

        <div className={classNames(defaultcss.all, sty.freeBox__vMgRz)}>
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img, {
              [sty.img__slider_first]: hasVariant(variants, "slider", "first"),
              [sty.img__slider_second]: hasVariant(
                variants,
                "slider",
                "second"
              ),
              [sty.img__slider_third]: hasVariant(variants, "slider", "third")
            })}
            role={"img"}
            src={
              hasVariant(variants, "slider", "third")
                ? slider3UjvTyKVPeQp
                : hasVariant(variants, "slider", "second")
                ? slider2KhGaFfv9WOkR
                : slider1Rv9Ddjsm5PBg
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__cHwn2)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? CircleOIcon
              : hasVariant(variants, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg___1DWkv, {
            [sty.svg__slider_second___1DWkvywOel]: hasVariant(
              variants,
              "slider",
              "second"
            ),
            [sty.svg__slider_third___1DWkv4LyPy]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__rhV3G, {
            [sty.svg__slider_first__rhV3GsNkQ]: hasVariant(
              variants,
              "slider",
              "first"
            ),
            [sty.svg__slider_second__rhV3GywOel]: hasVariant(
              variants,
              "slider",
              "second"
            ),
            [sty.svg__slider_third__rhV3G4LyPy]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__uihoS, {
            [sty.svg__slider_third__uihoS4LyPy]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCarousel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCarousel__VariantsArgs;
    args?: PlasmicProductCarousel__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicProductCarousel__Fetches;
  } & Omit<PlasmicProductCarousel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductCarousel__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicProductCarousel__ArgProps,
      internalVariantPropNames: PlasmicProductCarousel__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
