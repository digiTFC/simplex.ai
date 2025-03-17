import React from 'react';

const AIAgentsTable = ({ agentsData }: { agentsData: { feature: string; description: string; addOns: string[] }[] }) => {
  return (
    <div className="w-full mx-auto my-8">
      {/* Table Heading */}
      <h2 className="font-semibold mb-4 justify-start text-4xl">Key Features</h2>

      {/* Table */}
      <table className="w-full overflow-hidden">
        {/* Table Header */}
        {/* <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left font-semibold text-gray-700">Feature</th>
            <th className="py-3 px-4 text-center font-semibold text-gray-700">Add-On 1</th>
            <th className="py-3 px-4 text-center font-semibold text-gray-700">Add-On 2</th>
            {agentsData.some((agent) => agent.addOns.length > 2) && (
              <th className="py-3 px-4 text-center font-semibold text-gray-700">Add-On 3</th>
            )}
          </tr>
        </thead> */}

        {/* Table Body */}
        <tbody>
          {agentsData.map((agent, index) => (
            <tr key={index} className="border-t border-b border-gray-200">
              <td className="py-3 px-4 text-left w-1/3">
                <p className='font-semibold'>{agent.feature}</p>
                <p className='text-sm'>{agent.description}</p>
              </td>
              <td className="py-3 px-4 text-center text-sm bg-gray-300 w-2/9">
                {agent.addOns[0]}
              </td>
              <td className="py-3 px-4 text-center text-sm w-2/9">
                {agent.addOns[1]}
              </td>
              {agent.addOns.length > 2 && (
                <td className="py-3 px-4 text-center text-sm bg-gray-300 w-2/9">
                  {agent.addOns[2]}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AIAgentsTable;