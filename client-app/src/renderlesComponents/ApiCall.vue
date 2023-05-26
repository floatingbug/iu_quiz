<script setup>
import axios from 'axios';
const API_URL = "http://localhost:8000";

async function call({method, url, data}, fn){
    const result = await axios({
        method,
        url: `${API_URL}${url}`,
        data:,
        withCredentials: true
    });

    fn(result)
}

defineExpose({
    call
});
</script>
