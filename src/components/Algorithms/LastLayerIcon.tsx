/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useColorsContext } from '../../providers/ColorProvider';

interface ITopLayerIcon {
  className?: string;
  faces?: string;
  edges: string;
  type: AlgType;
  arrows?: string;
}

const LastLayerIcon: React.FC<ITopLayerIcon> = ({
  arrows,
  edges,
  faces,
  type,
  ...other
}) => {
  const { colors } = useColorsContext();
  const faceList =
    type === 'OLL' && faces !== null && faces !== undefined
      ? faces.split(' ')
      : Array.from('U'.repeat(9));
  const edgeList = edges.split(' ');
  const arrowList = arrows?.split(',') || [];

  const getColor = (list: string[], loc: number): string => colors[list[loc]];

  const getArrow = (face: number, dir: number) => (
    <g>
      <use
        href={`#arrow${face}-${dir}`}
        opacity="1"
        fill="#000000"
        fillOpacity="1"
      />
    </g>
  );

  const getLine = (lineType: string, dir: number | string) => (
    <g>
      <g>
        <use
          href={`#line-${lineType}-${dir}`}
          opacity="1"
          fillOpacity="0"
          stroke="#000000"
          strokeWidth="5"
          strokeOpacity="1"
        />
      </g>
    </g>
  );

  const build = () =>
    arrowList.map((arrow) => {
      const [a1, a2] = arrow.split('-');
      const a1Face = +a1[0];
      const a2Face = +a2[0];

      if (Math.floor(a1Face / 3) === Math.floor(a2Face / 3)) {
        // horizontal
        return (
          <React.Fragment key={arrow}>
            {getLine('h', Math.floor(a1Face / 3))}
            {a1.length > 1 && getArrow(a1Face, 2)}
            {a2.length > 1 && getArrow(a2Face, 6)}
          </React.Fragment>
        );
      }
      if (a1Face % 3 === a2Face % 3) {
        // vertical
        return (
          <React.Fragment key={arrow}>
            {getLine('v', a1Face % 3)}
            {a1.length > 1 && getArrow(a1Face, 0)}
            {a2.length > 1 && getArrow(a2Face, 4)}
          </React.Fragment>
        );
      }
      // diagnonal
      const a1ToLeft = a1Face % 3 < a2Face % 3;
      return (
        <React.Fragment key={arrow}>
          {getLine('d', a1[0] + a2[0])}
          {a1.length > 1 && getArrow(a1Face, a1ToLeft ? 1 : 7)}
          {a2.length > 1 && getArrow(a2Face, a1ToLeft ? 5 : 3)}
        </React.Fragment>
      );
    });

  return (
    <SvgIcon
      viewBox="56.86447197643844 36.70497255838907 248.27105604712312 248.59005488322194"
      {...other}
    >
      <defs>
        <path
          d="M125 60C133.28 60 140 66.72 140 75C140 84 140 96 140 105C140 113.28 133.28 120 125 120C116 120 104 120 95 120C86.72 120 80 113.28 80 105C80 96 80 84 80 75C80 66.72 86.72 60 95 60C104 60 116 60 125 60Z"
          id="face0"
        />

        <path
          d="M195 60C203.28 60 210 66.72 210 75C210 84 210 96 210 105C210 113.28 203.28 120 195 120C186 120 174 120 165 120C156.72 120 150 113.28 150 105C150 96 150 84 150 75C150 66.72 156.72 60 165 60C174 60 186 60 195 60Z"
          id="face1"
        />

        <path
          d="M265 61.56C273.28 61.56 280 68.27 280 76.56C280 85.56 280 97.56 280 106.56C280 114.84 273.28 121.56 265 121.56C256 121.56 244 121.56 235 121.56C226.72 121.56 220 114.84 220 106.56C220 97.56 220 85.56 220 76.56C220 68.27 226.72 61.56 235 61.56C244 61.56 256 61.56 265 61.56Z"
          id="face2"
        />

        <path
          d="M125 130C133.28 130 140 136.72 140 145C140 154 140 166 140 175C140 183.28 133.28 190 125 190C116 190 104 190 95 190C86.72 190 80 183.28 80 175C80 166 80 154 80 145C80 136.72 86.72 130 95 130C104 130 116 130 125 130Z"
          id="face3"
        />

        <path
          d="M195 130C203.28 130 210 136.72 210 145C210 154 210 166 210 175C210 183.28 203.28 190 195 190C186 190 174 190 165 190C156.72 190 150 183.28 150 175C150 166 150 154 150 145C150 136.72 156.72 130 165 130C174 130 186 130 195 130Z"
          id="face4"
        />

        <path
          d="M265 130C273.28 130 280 136.72 280 145C280 154 280 166 280 175C280 183.28 273.28 190 265 190C256 190 244 190 235 190C226.72 190 220 183.28 220 175C220 166 220 154 220 145C220 136.72 226.72 130 235 130C244 130 256 130 265 130Z"
          id="face5"
        />

        <path
          d="M265 200C273.28 200 280 206.72 280 215C280 224 280 236 280 245C280 253.28 273.28 260 265 260C256 260 244 260 235 260C226.72 260 220 253.28 220 245C220 236 220 224 220 215C220 206.72 226.72 200 235 200C244 200 256 200 265 200Z"
          id="face8"
        />

        <path
          d="M195 200C203.28 200 210 206.72 210 215C210 224 210 236 210 245C210 253.28 203.28 260 195 260C186 260 174 260 165 260C156.72 260 150 253.28 150 245C150 236 150 224 150 215C150 206.72 156.72 200 165 200C174 200 186 200 195 200Z"
          id="face7"
        />

        <path
          d="M125 200C133.28 200 140 206.72 140 215C140 224 140 236 140 245C140 253.28 133.28 260 125 260C116 260 104 260 95 260C86.72 260 80 253.28 80 245C80 236 80 224 80 215C80 206.72 86.72 200 95 200C104 200 116 200 125 200Z"
          id="face6"
        />

        <path
          d="M136.98 37.98C138.66 37.99 140.01 39.35 140.01 41.02C140 42.84 139.99 45.27 139.99 47.09C139.98 48.76 138.62 50.12 136.95 50.11C125.55 50.08 94.4 49.98 83.01 49.95C81.34 49.94 79.98 48.58 79.99 46.91C79.99 45.09 80 42.66 80.01 40.84C80.01 39.17 81.37 37.81 83.05 37.82C94.44 37.85 125.59 37.95 136.98 37.98Z"
          id="edge0"
        />

        <path
          d="M206.98 37.87C208.65 37.87 210.01 39.24 210 40.91C209.99 42.73 209.99 45.16 209.98 46.98C209.98 48.65 208.61 50.01 206.94 50C195.55 49.97 164.4 49.87 153.01 49.84C151.33 49.83 149.98 48.47 149.98 46.79C149.99 44.97 149.99 42.55 150 40.73C150.01 39.05 151.37 37.7 153.04 37.7C164.44 37.74 195.58 37.83 206.98 37.87Z"
          id="edge1"
        />

        <path
          d="M276.98 37.87C278.65 37.87 280.01 39.24 280 40.91C279.99 42.73 279.99 45.16 279.98 46.98C279.98 48.65 278.61 50.01 276.94 50C265.55 49.97 234.4 49.87 223.01 49.84C221.33 49.83 219.98 48.47 219.98 46.79C219.99 44.97 219.99 42.55 220 40.73C220.01 39.05 221.37 37.7 223.04 37.7C234.44 37.74 265.58 37.83 276.98 37.87Z"
          id="edge2"
        />

        <path
          d="M136.99 270.16C138.67 270.17 140.02 271.53 140.02 273.21C140.01 275.03 140.01 277.45 140 279.27C139.99 280.95 138.63 282.3 136.96 282.3C125.56 282.26 94.42 282.17 83.02 282.13C81.35 282.13 79.99 280.76 80 279.09C80.01 277.27 80.01 274.84 80.02 273.02C80.02 271.35 81.39 269.99 83.06 270C94.45 270.03 125.6 270.13 136.99 270.16Z"
          id="edge8"
        />

        <path
          d="M206.99 270.16C208.67 270.17 210.02 271.53 210.02 273.21C210.01 275.03 210.01 277.45 210 279.27C209.99 280.95 208.63 282.3 206.96 282.3C195.56 282.26 164.42 282.17 153.02 282.13C151.35 282.13 149.99 280.76 150 279.09C150.01 277.27 150.01 274.84 150.02 273.02C150.02 271.35 151.39 269.99 153.06 270C164.45 270.03 195.6 270.13 206.99 270.16Z"
          id="edge7"
        />

        <path
          d="M276.98 270.16C278.65 270.17 280.01 271.53 280 273.21C279.99 275.03 279.99 277.45 279.98 279.27C279.98 280.95 278.61 282.3 276.94 282.3C265.55 282.26 234.4 282.17 223.01 282.13C221.33 282.13 219.98 280.76 219.98 279.09C219.99 277.27 219.99 274.84 220 273.02C220.01 271.35 221.37 269.99 223.04 270C234.44 270.03 265.58 270.13 276.98 270.16Z"
          id="edge6"
        />

        <path
          d="M290 63.03C290 61.36 291.36 60 293.03 60C294.85 60 297.28 60 299.1 60C300.77 60 302.13 61.36 302.13 63.03C302.13 74.43 302.13 105.57 302.14 116.97C302.14 118.64 300.78 120 299.1 120C297.28 120 294.86 120 293.04 120C291.36 120 290 118.64 290 116.97C290 105.57 290 74.43 290 63.03Z"
          id="edge3"
        />

        <path
          d="M290 133.03C290 131.36 291.36 130 293.03 130C294.85 130 297.28 130 299.1 130C300.77 130 302.13 131.36 302.13 133.03C302.13 144.43 302.13 175.57 302.14 186.97C302.14 188.64 300.78 190 299.1 190C297.28 190 294.86 190 293.04 190C291.36 190 290 188.64 290 186.97C290 175.57 290 144.43 290 133.03Z"
          id="edge4"
        />

        <path
          d="M290 203.03C290 201.36 291.36 200 293.03 200C294.85 200 297.28 200 299.1 200C300.77 200 302.13 201.36 302.13 203.03C302.13 214.43 302.13 245.57 302.14 256.97C302.14 258.64 300.78 260 299.1 260C297.28 260 294.86 260 293.04 260C291.36 260 290 258.64 290 256.97C290 245.57 290 214.43 290 203.03Z"
          id="edge5"
        />

        <path
          d="M57.86 63.03C57.86 61.36 59.22 60 60.9 60C62.72 60 65.14 60 66.96 60C68.64 60 70 61.36 70 63.03C70 74.43 70 105.57 70 116.97C70 118.64 68.64 120 66.97 120C65.15 120 62.72 120 60.9 120C59.23 120 57.87 118.64 57.87 116.97C57.87 105.57 57.87 74.43 57.86 63.03Z"
          id="edge11"
        />

        <path
          d="M57.86 133.03C57.86 131.36 59.22 130 60.9 130C62.72 130 65.14 130 66.96 130C68.64 130 70 131.36 70 133.03C70 144.43 70 175.57 70 186.97C70 188.64 68.64 190 66.97 190C65.15 190 62.72 190 60.9 190C59.23 190 57.87 188.64 57.87 186.97C57.87 175.57 57.87 144.43 57.86 133.03Z"
          id="edge10"
        />

        <path
          d="M57.86 203.03C57.86 201.36 59.22 200 60.9 200C62.72 200 65.14 200 66.96 200C68.64 200 70 201.36 70 203.03C70 214.43 70 245.57 70 256.97C70 258.64 68.64 260 66.97 260C65.15 260 62.72 260 60.9 260C59.23 260 57.87 258.64 57.87 256.97C57.87 245.57 57.87 214.43 57.86 203.03Z"
          id="edge9"
        />

        <path
          d="M175.86 233.67L171.72 227.34L180 227.34L188.28 227.34L184.14 233.67L180 240L175.86 233.67Z"
          id="arrow7-4"
        />

        <path
          d="M184.14 86.33L188.28 92.66L180 92.66L171.72 92.66L175.86 86.33L180 80L184.14 86.33Z"
          id="arrow1-0"
        />

        <path
          d="M253.67 164.14L247.34 168.28L247.34 160L247.34 151.72L253.67 155.86L260 160L253.67 164.14Z"
          id="arrow5-6"
        />

        <path
          d="M106.33 155.86L112.66 151.72L112.66 160L112.66 168.28L106.33 164.14L100 160L106.33 155.86Z"
          id="arrow3-2"
        />

        <path d="M180 230L180 90" id="line-v-1" />

        <path d="M250 160L110 160" id="line-h-1" />

        <path
          d="M107.4 161.55L114.81 163.09L108.95 168.95L103.09 174.8L101.55 167.4L100 160L107.4 161.55Z"
          id="arrow3-1"
        />

        <path
          d="M172.6 238.45L165.19 236.91L171.05 231.05L176.91 225.2L178.45 232.6L180 240L172.6 238.45Z"
          id="arrow7-5"
        />

        <path d="M172.34 232.11L108.28 168.05" id="line-d-37" />

        <path
          d="M187.4 81.55L194.81 83.09L188.95 88.95L183.09 94.8L181.55 87.4L180 80L187.4 81.55Z"
          id="arrow1-1"
        />

        <path
          d="M252.6 158.45L245.19 156.91L251.05 151.05L256.91 145.2L258.45 152.6L260 160L252.6 158.45Z"
          id="arrow5-5"
        />

        <path d="M252.03 151.64L187.19 87.58" id="line-d-15" />

        <path
          d="M101.55 152.6L103.09 145.19L108.95 151.05L114.8 156.91L107.4 158.45L100 160L101.55 152.6Z"
          id="arrow3-3"
        />

        <path
          d="M178.45 87.4L176.91 94.81L171.05 88.95L165.2 83.09L172.6 81.55L180 80L178.45 87.4Z"
          id="arrow1-7"
        />

        <path d="M173.91 85.31L106.88 153.13" id="line-d-13" />

        <path
          d="M181.55 232.6L183.09 225.19L188.95 231.05L194.8 236.91L187.4 238.45L180 240L181.55 232.6Z"
          id="arrow7-3"
        />

        <path
          d="M258.45 167.4L256.91 174.81L251.05 168.95L245.2 163.09L252.6 161.55L260 160L258.45 167.4Z"
          id="arrow5-7"
        />

        <path d="M253.52 166.09L186.48 233.91" id="line-d-57" />

        <path
          d="M106.33 225.86L112.66 221.72L112.66 230L112.66 238.28L106.33 234.14L100 230L106.33 225.86Z"
          id="arrow6-2"
        />

        <path
          d="M253.67 234.14L247.34 238.28L247.34 230L247.34 221.72L253.67 225.86L260 230L253.67 234.14Z"
          id="arrow8-6"
        />

        <path d="M248.12 230L110 230" id="line-h-2" />

        <path
          d="M253.67 94.14L247.34 98.28L247.34 90L247.34 81.72L253.67 85.86L260 90L253.67 94.14Z"
          id="arrow2-6"
        />

        <path
          d="M106.33 85.86L112.66 81.72L112.66 90L112.66 98.28L106.33 94.14L100 90L106.33 85.86Z"
          id="arrow0-2"
        />

        <path d="M250 90L110 90" id="line-h-0" />

        <path
          d="M105.86 233.67L101.72 227.34L110 227.34L118.28 227.34L114.14 233.67L110 240L105.86 233.67Z"
          id="arrow6-4"
        />

        <path
          d="M114.14 86.33L118.28 92.66L110 92.66L101.72 92.66L105.86 86.33L110 80L114.14 86.33Z"
          id="arrow0-0"
        />

        <path d="M110 230L110 90" id="line-v-0" />

        <path
          d="M254.14 86.33L258.28 92.66L250 92.66L241.72 92.66L245.86 86.33L250 80L254.14 86.33Z"
          id="arrow2-0"
        />

        <path
          d="M245.86 233.67L241.72 227.34L250 227.34L258.28 227.34L254.14 233.67L250 240L245.86 233.67Z"
          id="arrow8-4"
        />

        <path d="M250 230L250 90" id="line-v-2" />

        <path
          d="M258.45 87.4L256.91 94.81L251.05 88.95L245.2 83.09L252.6 81.55L260 80L258.45 87.4Z"
          id="arrow2-7"
        />

        <path
          d="M101.55 232.6L103.09 225.19L108.95 231.05L114.8 236.91L107.4 238.45L100 240L101.55 232.6Z"
          id="arrow6-3"
        />

        <path d="M253.12 86.88L106.88 233.13" id="line-d-26" />

        <path
          d="M252.6 238.45L245.19 236.91L251.05 231.05L256.91 225.2L258.45 232.6L260 240L252.6 238.45Z"
          id="arrow8-5"
        />

        <path
          d="M107.4 81.55L114.81 83.09L108.95 88.95L103.09 94.8L101.55 87.4L100 80L107.4 81.55Z"
          id="arrow0-1"
        />

        <path d="M253.42 232.96L107.33 86.87" id="line-d-08" />
      </defs>
      <g>
        {/* faces */}
        <g>
          <use
            href="#face0"
            opacity="1"
            fill={getColor(faceList, 0)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#face0"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#face1"
            opacity="1"
            fill={getColor(faceList, 1)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#face1"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#face2"
            opacity="1"
            fill={getColor(faceList, 2)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#face2"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#face3"
            opacity="1"
            fill={getColor(faceList, 3)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#face3"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#face4"
            opacity="1"
            fill={getColor(faceList, 4)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#face4"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#face5"
            opacity="1"
            fill={getColor(faceList, 5)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#face5"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#face6"
            opacity="1"
            fill={getColor(faceList, 6)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#face6"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#face7"
            opacity="1"
            fill={getColor(faceList, 7)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#face7"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#face8"
            opacity="1"
            fill={getColor(faceList, 8)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#face8"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>

        {/* edges */}
        <g>
          <use
            href="#edge0"
            opacity="1"
            fill={getColor(edgeList, 0)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge0"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge1"
            opacity="1"
            fill={getColor(edgeList, 1)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge1"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge2"
            opacity="1"
            fill={getColor(edgeList, 2)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge2"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge3"
            opacity="1"
            fill={getColor(edgeList, 3)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge3"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge4"
            opacity="1"
            fill={getColor(edgeList, 4)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge4"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge5"
            opacity="1"
            fill={getColor(edgeList, 5)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge5"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge6"
            opacity="1"
            fill={getColor(edgeList, 6)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge6"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge7"
            opacity="1"
            fill={getColor(edgeList, 7)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge7"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge8"
            opacity="1"
            fill={getColor(edgeList, 8)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge8"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge9"
            opacity="1"
            fill={getColor(edgeList, 9)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge9"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge10"
            opacity="1"
            fill={getColor(edgeList, 10)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge10"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>
        <g>
          <use
            href="#edge11"
            opacity="1"
            fill={getColor(edgeList, 11)}
            fillOpacity="1"
          />
          <g>
            <use
              href="#edge11"
              opacity="1"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="1"
            />
          </g>
        </g>

        {/* lines */}
        {type === 'PLL' && build()}
      </g>
    </SvgIcon>
  );
};

export default LastLayerIcon;
