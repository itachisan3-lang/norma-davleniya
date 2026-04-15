import Link from 'next/link';

export default function PressureTable({ rows, showGender = false, caption }) {
  return (
    <div className="table-wrap">
      <table className="data-table" aria-label={caption || 'Таблица норм артериального давления'}>
        {caption && <caption style={{captionSide:'top',textAlign:'left',padding:'10px 14px',color:'var(--text-muted)',fontSize:'0.82rem'}}>{caption}</caption>}
        <thead>
          <tr>
            <th scope="col">Возраст</th>
            {showGender ? (
              <>
                <th scope="col">Мужчины, мм рт.ст.</th>
                <th scope="col">Женщины, мм рт.ст.</th>
              </>
            ) : (
              <th scope="col">Норма, мм рт.ст.</th>
            )}
            <th scope="col">Пульсовое</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const pulse = showGender
              ? `${row.sysMinM - row.diaMaxM}–${row.sysMaxM - row.diaMinM}`
              : `${(row.sysMin || row.sysMinM) - (row.diaMax || row.diaMaxM)}–${(row.sysMax || row.sysMaxM) - (row.diaMin || row.diaMinM)}`;
            return (
              <tr key={i}>
                <td>
                  {row.slug
                    ? <Link href={`/vozrast/${row.slug}`}>{row.label}</Link>
                    : row.label
                  }
                </td>
                {showGender ? (
                  <>
                    <td>{row.sysMinM}–{row.sysMaxM} / {row.diaMinM}–{row.diaMaxM}</td>
                    <td>{row.sysMinW}–{row.sysMaxW} / {row.diaMinW}–{row.diaMaxW}</td>
                  </>
                ) : (
                  <td>{row.sysMin}–{row.sysMax} / {row.diaMin}–{row.diaMax}</td>
                )}
                <td>{pulse} мм</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
