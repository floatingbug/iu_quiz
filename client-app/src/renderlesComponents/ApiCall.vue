<script setup>
import axios from 'axios'
const API_URL_LOCAL = "http://localhost:8000";
const API_URL_Server = 'http://194.195.241.51:8000';
const API_URL = API_URL_Server;

async function call({ method, url, data }, fn) {
    const result = await axios({
        method,
        url: `${API_URL}${url}`,
        data,
        withCredentials: true
    })

    fn(result.data)
}

defineExpose({
    call
})
</script>
