#!/bin/bash
grep -rl 'khZd1mjoUVFcAvveFeEq9dHbP8cdwmUAz13k76eB' ./ | xargs sed -i "" 's/khZd1mjoUVFcAvveFeEq9dHbP8cdwmUAz13k76eB/<GIT_APP_ID>/g'
grep -rl 'BiATLD8a3zSid0SvIFESPrWI4JmTPeaRlhUAolki' ./ | xargs sed -i "" 's/BiATLD8a3zSid0SvIFESPrWI4JmTPeaRlhUAolki/<GIT_MASTER_KEY>/g'
grep -rl 'deuKmxveSgUuNx0xOxkhOzRCWHIDbNdH4tjLRXvP' ./ | xargs sed -i "" 's/deuKmxveSgUuNx0xOxkhOzRCWHIDbNdH4tjLRXvP/<GIT_CLIENT_KEY>/g'
grep -rl '5dYNlHCHKXkRPWfUILt957cmwc7jFsrscaVKm1ed' ./ | xargs sed -i "" 's/5dYNlHCHKXkRPWfUILt957cmwc7jFsrscaVKm1ed/<GIT_WINDOWS_KEY>/g'
grep -rl 'Wf2yYFkfTichFsrGmSZEs5JSlwR7ScaFMab1SczJ' ./ | xargs sed -i "" 's/Wf2yYFkfTichFsrGmSZEs5JSlwR7ScaFMab1SczJ/<GIT_JAVASCRIPT_KEY>/g'
grep -rl 'wi3cEzEGM0VRcFbYg1oDdDnxLjAm0U9xWAn6IKKn' ./ | xargs sed -i "" 's/wi3cEzEGM0VRcFbYg1oDdDnxLjAm0U9xWAn6IKKn/<GIT_REST_API_KEY>/g'


