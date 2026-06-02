import React from 'react'

const AlarmDetailsTableData = () => {
    const [openRow, setOpenRow] = useState(null);
    const tableData = [
      {
        id: 1,
        hour: 13,
        alarms: [
          {
          alarmId: "A001",
          alarmType: "Meter Failure",
          alarmCount:'2',
          dateTime: "26-05-2026 13:45",
        },
        {
          alarmId: "A002",
          alarmType: "Communication Loss",
            alarmCount:'2',
          dateTime: "26-05-2026 13:50",
        },
      ],
    },

    {
      id: 2,
      hour: 11,
      alarms: [ 
        {
          alarmId: "A003",
          alarmType: "Voltage Missing",
          alarmCount:'2',   
          dateTime: "26-05-2026 11:20",
        },
        {
          alarmId: "A004",
          alarmType: "Meter Bypass",
          alarmCount:'2',
          dateTime: "26-05-2026 11:35",
        },
        {
          alarmId: "A005",
          alarmType: "Current Missing",
          alarmCount:'2',
          dateTime: "26-05-2026 11:50",
        },
      ],
    },

    {
      id: 4,
      hour: 10,
      alarms: [
        {
          alarmId: "A006",
          alarmType: "Power Failure",
          alarmCount:'2',
          dateTime: "26-05-2026 10:15",
        },
      ],
    },

    {
      id: 5,
      hour: 9,
      alarms: [
        {
          alarmId: "A007",
          alarmType: "Communication Failure",
          alarmCount:'2',
          dateTime: "26-05-2026 10:15",
        },
      ],
    },

    {
      id: 6,
      hour: 8,
      alarms: [
        {
          alarmId: "A008",
          alarmType: "Meter Failure",
          alarmCount:'2',
          dateTime: "26-05-2026 10:15",
        },
      ],
    },
  ] ;

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#1e2433]">
            <th className="px-4 py-3 text-left text-gray-400">S.No</th>

            <th className="px-4 py-3 text-left text-gray-400">Hour</th>

            <th className="px-4 py-3 text-left text-gray-400">Alarm Count</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row) => (
            <React.Fragment key={row.id}>
              <tr
                onClick={() => setOpenRow(openRow === row.id ? null : row.id)}
                className="
                  border-t
                  border-[#3d4450]
                  hover:bg-[#343845]
                  cursor-pointer
                  transition-colors
                "
              >
                <td className="px-4 py-3 text-gray-300">{row.id}</td>

                <td className="px-4 py-3 text-gray-300">
                  <span className="inline-flex items-center gap-2">
                    {row.hour}

                    <IoChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                        openRow === row.id ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </td>

                <td className="px-4 py-3 text-gray-300">{row.alarms.reduce((total, alarm) => total + parseInt(alarm.alarmCount), 0)}</td>
              </tr>

              {openRow === row.id && (
                <tr>
                  <td
                    colSpan={3}
                    className="bg-[#252830] px-6 py-4 border-t border-[#3d4450]"
                  >
                    <div className="text-sm text-gray-300 ">
                      <table className="w-full">
                        <thead className="bg-blue-900">
                          <tr className="font-light tracking-wide">
                            <th className="px-4 py-3 text-left">S.No</th>
                            <th className="px-4 py-3 text-left">Alarm ID</th>
                            <th className="px-4 py-3 text-left">Alarm Type</th>
                            <th className="px-4 py-3 text-left">Alarm Count</th>
                            <th className="px-4 py-3 text-left">
                              Alarm Date & Time
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {row.alarms.map((alarm, index) => (
                            <tr
                              key={alarm.alarmId}
                              className="border-b border-[#3d4450]"
                            >
                              <td className="px-4 py-3">{index + 1}</td>

                              <td className="px-4 py-3">{alarm.alarmId}</td>

                              <td className="px-4 py-3">{alarm.alarmType}</td>

                              <td className="px-4 py-3">{alarm.alarmCount}</td>

                              <td className="px-4 py-3">{alarm.dateTime}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AlarmDetailsTableData
