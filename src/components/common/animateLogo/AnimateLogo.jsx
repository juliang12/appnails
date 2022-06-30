import React from "react";
import { motion } from "framer-motion";

const AnimateLogo = () => {
  const svgVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(0, 0, 0, 1)",
    },
  };

  return (
    <>
      <motion.svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt"
        height="202.000000pt"
        viewBox="0 0 300.000000 202.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)">
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 1, 0.8, 1] },
            }}
            d="M1788 1728 c-93 -54 -87 -210 10 -272 54 -34 82 -72 82 -112 0 -27
-20 -64 -35 -64 -38 0 -46 44 -15 83 20 26 20 26 1 36 -42 23 -81 -23 -81 -94
0 -58 25 -85 78 -85 88 0 152 66 152 157 0 68 -16 99 -82 156 -52 45 -52 46
-53 104 0 51 2 58 20 58 18 0 20 -7 20 -64 0 -71 12 -86 46 -55 33 30 23 141
-15 166 -22 15 -92 7 -128 -14z m4 -44 c4 -3 0 -20 -7 -37 -7 -18 -10 -47 -8
-64 7 -41 -21 -47 -31 -7 -14 56 20 135 46 108z m37 -120 c6 4 11 0 11 -9 0
-8 -7 -18 -15 -21 -8 -4 -15 -15 -15 -25 0 -23 -13 -25 -30 -4 -14 17 -5 36
14 29 17 -6 31 12 16 21 -5 3 -10 12 -10 18 0 8 3 7 9 -2 5 -7 14 -10 20 -7z
m59 -63 c17 -17 32 -35 32 -41 0 -6 4 -9 8 -6 19 11 31 -66 20 -118 l-12 -51
-12 40 -12 40 -1 -37 c-1 -21 -4 -38 -9 -38 -4 0 -7 25 -5 56 2 52 -1 60 -33
93 -35 37 -39 47 -28 75 8 22 15 20 52 -13z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 1, 0.8, 1] },
            }}
            d="M1440 1692 l-22 -18 26 -215 c14 -119 26 -223 26 -232 0 -9 10 -23
23 -31 31 -21 204 0 221 26 8 14 7 21 -5 33 -13 13 -26 14 -72 7 l-56 -9 -6
41 c-3 23 -12 102 -20 176 -8 74 -18 152 -21 173 -10 64 -50 85 -94 49z m48
-107 c5 -44 8 -82 6 -84 -2 -2 -10 -1 -17 2 -16 6 -34 148 -22 168 13 21 23
-6 33 -86z m12 -136 c0 -38 -24 -35 -28 4 -2 19 1 27 12 27 11 0 16 -10 16
-31z m33 -91 c-2 -5 1 -8 6 -8 6 0 11 -21 11 -49 0 -39 4 -51 18 -55 10 -4 19
-13 19 -21 0 -18 -13 -20 -20 -2 -4 9 -8 9 -15 -2 -12 -16 -32 -6 -32 16 0 13
-3 13 -15 3 -13 -11 -15 -5 -15 44 0 71 0 69 -12 84 -8 9 -6 12 8 13 17 1 17
2 2 6 -10 2 -18 8 -18 13 0 5 6 7 14 4 8 -3 18 0 22 7 5 9 11 4 20 -16 7 -17
10 -33 7 -37z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [0, 0, 0.8, 1] },
            }}
            d="M1302 1678 c-7 -7 -12 -28 -12 -47 1 -76 49 -432 60 -446 17 -20 63
-19 83 3 15 16 14 35 -8 227 -14 116 -25 218 -25 227 0 40 -69 65 -98 36z m39
-64 c10 -46 10 -134 0 -134 -16 0 -19 11 -26 94 -6 65 -5 78 6 74 8 -3 17 -18
20 -34z m38 -148 c-9 -8 -10 -5 -5 14 3 14 6 32 7 40 1 8 4 2 6 -14 3 -16 -1
-34 -8 -40z m-21 -30 c3 -20 0 -27 -10 -24 -7 3 -14 17 -16 32 -3 20 0 27 10
24 7 -3 14 -17 16 -32z m38 -30 c10 -11 14 -41 14 -110 0 -92 -8 -115 -28 -80
-5 9 -13 15 -18 15 -11 -1 -12 122 -1 162 8 31 13 33 33 13z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [0, 0, 0.8, 1] },
            }}
            d="M1080 1659 c-50 -20 -90 -71 -112 -143 -18 -60 -20 -86 -16 -205 6
-153 14 -181 57 -181 53 0 62 24 55 142 l-7 106 59 7 c32 4 66 9 75 11 14 4
18 -11 28 -93 18 -150 17 -145 54 -141 l32 3 -2 78 c-2 43 -12 123 -23 178
-42 205 -102 277 -200 238z m50 -29 c0 -6 -16 -16 -35 -24 -41 -17 -69 -60
-86 -128 -6 -29 -16 -47 -23 -45 -18 7 -8 67 20 126 21 42 35 57 67 71 40 18
57 18 57 0z m47 -107 l22 -61 -52 -7 c-29 -3 -60 -9 -69 -11 -15 -4 -15 0 -2
57 17 73 29 91 58 87 16 -2 26 -19 43 -65z m54 -63 c5 0 10 6 10 13 4 37 13
-66 10 -108 l-4 -50 -9 40 c-5 22 -17 47 -28 55 -17 13 -18 19 -7 53 9 29 13
33 15 18 2 -12 8 -21 13 -21z m-136 -43 c16 -4 14 -5 -7 -6 -14 0 -29 -7 -31
-13 -4 -10 -8 -9 -16 2 -9 13 -11 12 -11 -5 -1 -18 -2 -17 -11 4 -7 18 -5 26
8 37 15 10 21 10 33 -1 8 -7 24 -15 35 -18z m-95 -33 c0 -15 -6 -24 -15 -24
-15 0 -21 40 -9 53 12 11 24 -3 24 -29z m40 -111 c-1 -71 -3 -80 -26 -96 -13
-10 -23 -15 -22 -10 1 4 -1 32 -5 61 -4 29 -5 68 -1 87 5 28 11 35 30 35 23 0
24 -2 24 -77z m224 -16 c4 -19 3 -26 -4 -22 -5 3 -10 18 -10 32 0 32 5 28 14
-10z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [0, 0, 0.8, 1] },
            }}
            d="M720 1617 c-14 -7 -30 -28 -36 -47 -14 -41 -11 -48 13 -29 17 13 17
13 4 -4 -12 -15 -15 -58 -15 -204 -1 -180 -2 -186 -22 -194 -32 -11 -41 16
-59 186 -8 83 -17 165 -20 183 -3 24 2 39 16 53 24 24 29 24 29 2 0 -15 2 -15
9 -4 7 11 10 10 14 -5 3 -13 5 -11 6 9 1 36 -36 56 -74 39 -22 -10 -25 -18
-25 -59 1 -74 46 -434 56 -443 21 -19 52 -20 73 -3 21 17 22 26 24 225 2 178
4 210 19 224 15 15 17 15 26 -3 16 -28 39 -155 53 -283 11 -105 21 -140 38
-140 3 0 6 41 6 92 0 64 4 93 13 95 7 3 12 -4 12 -16 0 -12 6 -21 15 -21 12 0
15 -14 15 -65 0 -42 4 -65 12 -65 8 0 9 26 5 94 -12 178 -59 337 -109 369 -35
24 -70 29 -98 14z m89 -34 c28 -23 73 -135 60 -147 -12 -13 -22 -1 -38 49 -16
47 -37 74 -69 86 -13 5 -20 13 -17 19 10 15 41 12 64 -7z m81 -229 c0 -45 -24
-42 -28 4 -2 24 1 32 12 32 12 0 16 -10 16 -36z m-53 -66 c-2 -13 -4 -5 -4 17
-1 22 1 32 4 23 2 -10 2 -28 0 -40z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [0, 0, 0.8, 1] },
            }}
            d="M222 1454 c-29 -20 -27 -23 98 -124 52 -43 104 -87 114 -99 11 -11
23 -21 28 -21 20 0 2 32 -80 140 -93 123 -114 137 -160 104z m103 -61 c71 -90
73 -102 9 -49 -103 86 -105 89 -92 98 25 15 38 7 83 -49z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [0, 0, 0.8, 1] },
            }}
            d="M2620 1339 c-98 -132 -117 -176 -47 -113 23 22 84 72 135 113 50 41
92 78 92 82 0 11 -54 39 -74 39 -8 0 -56 -54 -106 -121z m133 89 c15 -12 10
-19 -45 -63 -87 -70 -106 -83 -92 -65 35 49 110 140 115 140 3 0 13 -6 22 -12z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M2037 1433 c-4 -3 -7 -80 -7 -170 0 -188 -2 -183 87 -163 75 16 103
45 103 104 0 36 -5 48 -25 64 -24 19 -24 21 -9 51 21 43 10 87 -26 106 -29 15
-111 21 -123 8z m23 -68 c0 -25 -4 -45 -10 -45 -5 0 -10 20 -10 45 0 25 5 45
10 45 6 0 10 -20 10 -45z m71 25 c34 -19 15 -80 -25 -80 -3 0 -6 20 -6 45 0
49 1 50 31 35z m-71 -100 c0 -11 -4 -20 -10 -20 -5 0 -10 9 -10 20 0 11 5 20
10 20 6 0 10 -9 10 -20z m80 -45 c23 -12 30 -23 30 -44 0 -31 -12 -45 -47 -55
-22 -7 -23 -5 -23 53 0 34 2 61 5 61 4 0 19 -7 35 -15z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={svgVariants}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M2246 1424 c-12 -31 -6 -134 10 -174 13 -32 23 -42 52 -50 28 -7 41
-6 59 5 22 15 22 15 16 -17 -10 -55 -43 -76 -43 -28 0 28 -17 34 -30 10 -8
-15 -8 -26 1 -42 16 -30 28 -38 61 -38 63 0 103 113 96 270 l-3 75 -35 0 -35
0 -7 -69 c-8 -84 -25 -128 -47 -124 -13 3 -17 19 -19 78 -3 109 -7 120 -41
120 -17 0 -31 -6 -35 -16z m27 -81 c-2 -82 -2 -83 -13 -58 -10 24 -12 87 -4
109 13 33 19 14 17 -51z m170 -50 c-5 -64 -9 -83 -22 -85 -39 -8 -47 63 -10
83 14 7 19 21 19 56 0 31 3 44 10 37 6 -6 7 -42 3 -91z m-135 -62 c3 -8 -1
-12 -9 -9 -7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10 17 -17z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={svgVariants}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M23 1294 c-26 -34 -26 -37 -9 -49 10 -8 64 -28 119 -45 56 -17 138
-44 182 -61 108 -41 115 -43 115 -31 0 6 -19 22 -42 35 -24 13 -107 61 -186
105 -78 45 -144 82 -147 82 -2 0 -16 -16 -32 -36z m147 -50 c55 -31 99 -58 97
-60 -7 -8 -237 71 -237 81 0 13 20 35 32 35 4 0 53 -25 108 -56z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={svgVariants}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M2860 1270 c-47 -28 -131 -76 -187 -107 -57 -31 -103 -62 -103 -70 0
-11 7 -10 38 3 70 30 107 43 238 83 72 23 136 47 142 54 9 10 5 22 -14 50 -13
20 -26 37 -27 37 -1 0 -40 -23 -87 -50z m99 -1 c16 -27 11 -31 -84 -60 -38
-12 -90 -28 -114 -35 -25 -8 -42 -11 -38 -8 7 8 210 123 217 124 3 0 11 -10
19 -21z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={svgVariants}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M895 1117 c-11 -7 -72 -33 -137 -58 l-116 -44 -12 -57 c-7 -32 -15
-58 -19 -58 -3 0 -14 26 -24 57 -10 31 -31 71 -46 89 l-29 32 -28 -19 c-16
-10 -72 -38 -124 -60 -52 -23 -96 -43 -98 -44 -2 -2 -10 -74 -18 -161 -8 -88
-28 -247 -44 -354 l-29 -195 29 -29 c19 -19 68 -44 142 -71 62 -23 120 -45
129 -49 14 -6 17 13 25 171 9 175 10 177 25 143 9 -19 27 -45 40 -57 22 -20
29 -21 97 -13 40 5 78 9 84 7 6 -1 16 16 22 38 l12 40 7 -40 c4 -22 7 -53 7
-69 0 -78 23 -159 54 -193 l31 -35 118 74 c105 65 117 76 113 98 -2 14 -18
108 -35 209 -31 184 -51 385 -51 513 l0 66 -46 41 c-53 46 -52 46 -79 28z m55
-307 c11 -126 63 -471 75 -489 6 -11 -174 -133 -186 -125 -4 2 -10 39 -13 81
-4 43 -16 133 -27 201 -10 67 -19 138 -19 157 0 65 -17 43 -59 -81 -33 -95
-48 -124 -61 -124 -9 0 -38 -3 -64 -6 l-46 -7 -16 39 c-51 126 -89 213 -91
210 -6 -6 -33 -336 -33 -403 0 -40 -3 -73 -7 -73 -21 1 -188 70 -191 79 -2 6
8 86 22 179 14 93 33 241 41 327 8 87 16 159 18 160 1 1 18 8 37 15 19 7 65
28 101 45 l66 32 53 -135 c40 -98 56 -129 61 -116 4 11 17 57 30 104 12 47 25
91 29 98 3 7 64 36 136 65 l129 53 2 -81 c2 -44 7 -136 13 -205z m-190 -347
c0 -27 -34 -73 -55 -73 -7 0 -2 19 13 50 27 56 42 64 42 23z m-276 -16 c-3 -9
-10 -17 -15 -17 -11 0 -12 34 -2 43 11 12 24 -8 17 -26z m576 -181 c0 -11
-156 -116 -174 -116 -21 0 3 23 63 60 39 23 75 48 82 56 15 18 29 18 29 0z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={svgVariants}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M1464 1079 c-62 -22 -176 -56 -255 -77 l-144 -38 3 -30 c2 -16 14
-85 28 -154 14 -69 38 -199 54 -290 32 -185 41 -214 76 -251 l25 -26 127 49
c162 62 305 108 337 108 l25 0 0 130 c0 125 -1 130 -25 155 -30 29 -71 33
-134 10 l-41 -14 2 74 c3 67 5 75 23 75 11 1 42 9 69 18 l50 17 -1 105 -1 105
-42 37 c-24 21 -48 37 -54 37 -6 -1 -61 -19 -122 -40z m136 -84 c0 -74 -3 -95
-14 -95 -17 0 -176 -45 -232 -65 -37 -14 -40 -18 -36 -46 3 -23 8 -29 21 -23
28 11 104 34 115 34 7 0 11 -29 11 -79 l0 -79 -60 -20 c-51 -17 -60 -23 -63
-46 -2 -14 -1 -26 1 -26 3 0 36 12 73 26 82 31 214 74 231 74 8 0 11 -28 10
-95 -2 -93 -3 -96 -27 -102 -14 -3 -112 -37 -218 -75 -106 -39 -195 -69 -197
-66 -2 2 -11 48 -20 103 -8 55 -34 194 -56 308 -23 115 -37 212 -33 216 5 4
68 23 139 41 72 18 177 50 235 70 58 21 108 38 113 39 4 0 7 -42 7 -94z m40
-115 c0 -5 -9 -14 -20 -20 -22 -12 -27 -1 -8 18 14 14 28 16 28 2z m-118 -62
c-19 -19 -24 -21 -32 -8 -12 20 -3 30 28 30 l26 0 -22 -22z m171 -387 c-5 -19
-58 -39 -70 -27 -4 3 0 6 9 6 8 0 23 9 33 20 23 25 35 26 28 1z m-112 -47
c-18 -8 -38 -13 -45 -11 -6 3 5 9 24 15 50 15 60 13 21 -4z m-251 -89 c0 -8
-52 -26 -58 -20 -3 2 6 9 19 14 28 11 39 13 39 6z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M2122 1079 c-62 -22 -174 -55 -250 -75 -75 -19 -141 -39 -146 -44 -5
-5 11 -110 37 -247 25 -131 51 -272 58 -313 15 -96 23 -118 61 -157 29 -30 33
-31 57 -19 78 39 390 146 428 146 21 0 22 4 25 128 3 123 2 128 -21 155 -28
31 -71 35 -133 13 l-37 -13 -3 73 -3 72 38 6 c22 4 54 13 73 21 l34 14 0 98 0
97 -42 43 c-23 24 -47 42 -53 42 -5 -1 -61 -19 -123 -40z m138 -81 l0 -93 -88
-21 c-48 -12 -113 -32 -144 -44 -52 -19 -58 -24 -58 -51 0 -16 2 -29 3 -29 2
0 30 9 62 20 87 30 85 31 85 -59 l0 -79 -64 -22 c-58 -19 -63 -23 -58 -46 3
-19 9 -23 21 -18 38 16 267 93 279 94 9 0 12 -25 12 -95 l0 -95 -27 -6 c-16
-4 -113 -38 -217 -77 -141 -52 -190 -66 -196 -57 -4 7 -15 63 -25 124 -9 61
-34 197 -55 301 -20 105 -36 191 -35 193 1 1 61 18 133 37 72 19 182 52 244
74 62 21 116 39 121 40 4 0 7 -41 7 -91z m34 -123 c-4 -8 -13 -15 -21 -15 -13
0 -13 3 -3 15 7 8 16 15 21 15 5 0 6 -7 3 -15z m-112 -57 c-19 -20 -42 -18
-42 3 0 12 42 29 54 22 4 -3 -1 -14 -12 -25z m152 -405 c-10 -7 -27 -13 -38
-13 -16 0 -13 5 14 25 23 17 36 22 39 14 2 -7 -4 -18 -15 -26z m-93 -28 c-18
-8 -38 -15 -45 -14 -15 1 46 28 64 28 8 0 0 -6 -19 -14z m-141 -50 c-14 -8
-29 -14 -35 -14 -5 0 1 6 15 14 14 8 30 14 35 14 6 0 -1 -6 -15 -14z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M2575 980 c-33 -10 -86 -26 -118 -35 -55 -16 -58 -18 -53 -43 12 -58
56 -476 66 -621 9 -137 12 -157 32 -178 12 -13 29 -23 37 -23 30 0 374 109
381 121 4 6 13 74 20 151 l12 139 -23 25 c-29 31 -66 31 -128 0 l-48 -25 -6
151 c-4 83 -7 179 -7 213 0 61 -1 63 -45 104 -24 22 -48 41 -52 40 -5 0 -35
-9 -68 -19z m89 -268 c4 -142 4 -265 0 -275 -9 -24 -3 -22 104 28 52 25 96 44
97 43 1 -2 -3 -57 -9 -122 l-11 -119 -160 -48 c-88 -27 -163 -49 -167 -49 -3
0 -9 44 -13 98 -4 53 -20 218 -36 366 -16 148 -28 270 -27 271 3 3 199 62 209
64 3 1 9 -115 13 -257z m226 -461 c0 -12 -42 -42 -49 -36 -5 6 29 45 41 45 4
0 8 -4 8 -9z"
          />
          <motion.path
            stroke="#000"
            strokeWidth="10"
            fill="none"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M1124 168 c-3 -5 -4 -12 -1 -14 10 -11 203 -34 721 -90 552 -58 584
-59 573 -16 -3 9 -8 34 -12 54 -11 69 25 66 -763 71 -309 3 -515 1 -518 -5z
m1204 -56 c6 -9 12 -27 12 -40 0 -23 -3 -24 -37 -18 -38 6 -446 48 -598 62
-185 16 -97 22 245 17 316 -5 367 -7 378 -21z"
          />
        </g>
      </motion.svg>
    </>
  );
};

export default AnimateLogo;
