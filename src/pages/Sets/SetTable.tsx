import TableRow from '../../components/ui/TableRow';
import RawSets from '../../data/json/set_items.json';
import { characterName, requirementKeysFor, requirementName } from '../../shared/helpers/util';
import type { SetData } from '../../types';

const Sets = RawSets as SetData[];

const setBonifications = (bonifications: string[]) => (
  <div className="flex flex-col set-bonuses">
    <h4 className="font-bold text-diablo-dark-brown">Bonificaciones Totales</h4>
    {bonifications.length > 0 ? (
      bonifications.map((bonification, index) => (
        <span key={index} className="text-diablo-brown font-medium">
          {bonification}
        </span>
      ))
    ) : (
      <span className="text-diablo-brown font-medium">Ninguna</span>
    )}
  </div>
);

type SetTableProps = {
  setId: string;
};

const SetTable = ({ setId }: SetTableProps) => {
  const set = Sets.find((aSet) => aSet.id === setId);

  if (!set) {
    return (
      <div className="flex justify-center font-bold text-4xl text-white py-16">Elegí un Set</div>
    );
  }

  return (
    <>
      <div className="m-4">
        <span className="text-white text-xl font-semibold">{set.name}</span>
      </div>
      <div className="px-2 md:px-4 overflow-x-auto min-w-0" style={{ WebkitOverflowScrolling: 'touch' }}>
        <table className="diablo-table w-full min-w-[640px] border border-gray-600">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="diablo-table-item w-1/4 min-w-[200px] table-cell text-center">Item</th>
              <th className="diablo-table-item specifications-column min-w-[300px] table-cell text-center">
                Especificaciones
              </th>
            </tr>
          </thead>
          <tbody>
            {set.items.map((item) => (
              <TableRow key={item.name}>
                <td className="diablo-table-item w-1/4 min-w-[200px] table-cell align-top text-center">
                  <div className="flex flex-col items-center text-center">
                    <img src={item.imageUrl} alt={item.name} className="w-auto my-2 item-image" />
                    <span className="text-diablo-orange">{item.labelName}</span>
                    <span className="text-diablo-green font-bold">{item.name}</span>
                    <span className="text-diablo-green font-bold">{item.originalName}</span>
                    {item.isCharacterItem && (
                      <span className="text-diablo-gold font-medium">
                        Solo para {characterName(set.character || '')}
                      </span>
                    )}
                    {!!item.tcNumber && (
                      <div className="item-tc-number text-diablo-orange">TC: {item.tcNumber}</div>
                    )}
                  </div>
                </td>
                <td className="diablo-table-item specifications-column min-w-[300px] table-cell align-top text-left">
                  <div className="flex flex-col items-start text-left">
                    {requirementKeysFor(Object.keys(item.requirements)).map((key, index) => (
                      <span key={index}>
                        {requirementName(key)}: {String(item.requirements[key])}
                      </span>
                    ))}
                  </div>
                  <div className="text-diablo-blue flex flex-col items-start text-left">
                    {item.attributes.map((attribute, index) => (
                      <span key={index}>{attribute}</span>
                    ))}
                  </div>
                  <div className="text-diablo-green flex flex-col items-start text-left">
                    {(item.setAttributes || []).map((attribute, index) => (
                      <span key={index}>{attribute}</span>
                    ))}
                  </div>
                </td>
              </TableRow>
            ))}
            <TableRow>
              <td colSpan={2} className="table-cell px-6 py-4">
                <div className="flex flex-wrap gap-6">
                  {setBonifications(set.partialBonuses)}
                  {setBonifications(set.completeBonuses)}
                </div>
              </td>
            </TableRow>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SetTable;
